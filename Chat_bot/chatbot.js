import React, { useState, useEffect, useRef } from 'react';

// Main App component for the MedGuard Chatbot
const App = () => {
  // State to store chat messages
  const [messages, setMessages] = useState([]);
  // State to store the current user input
  const [input, setInput] = useState('');
  // State to manage loading indicator during API calls
  const [isLoading, setIsLoading] = useState(false);
  // Ref to scroll to the bottom of the chat window
  const messagesEndRef = useRef(null);

  // Scroll to the latest message whenever messages state updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Add an initial welcome message when the component mounts
  useEffect(() => {
    setMessages([
      { sender: 'bot', text: 'Hello! I am your MedGuard Assistant. How can I help you today? You can ask me about verifying drugs, reporting suspicious products, or general information about MedGuard.' }
    ]);
  }, []);

  // Function to send a message to the chatbot
  const handleSendMessage = async () => {
    if (input.trim() === '') return; // Prevent sending empty messages

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]); // Add user message to chat
    setInput(''); // Clear input field
    setIsLoading(true); // Show loading indicator

    try {
      // Define the system instruction for the chatbot
      const systemInstruction = `
      You are MedGuard Assistant, an AI-powered chatbot designed to help users with drug verification and reporting suspicious drugs based on the MedGuard platform's capabilities.
      
      MedGuard's Core Features:
      1.  **Drug Verification**: Users can input NAFDAC numbers and product tokens to check drug authenticity.
      2.  **Image-Based Validation**: The platform can compare drug packaging images against registered ones to detect counterfeits.
      3.  **Report Suspicious Drugs**: Users can report fake products by providing photos, descriptions, and locations.
      4.  **Admin Dashboard**: For authorities to review reports and analytics.
      5.  **Voice Search**: (Optional) Users can speak NAFDAC numbers for verification.

      When a user asks about:
      -   **Verifying drugs**: Ask them to provide the NAFDAC number and the unique product token found on the drug packaging.
      -   **Reporting suspicious drugs/fake drugs**: Ask them to describe the issue, provide the location where they found the drug, and if possible, suggest uploading a photo (though the chatbot itself cannot handle uploads, it should guide the user to the platform's feature).
      -   **General complaints/issues**: Try to direct them to the relevant MedGuard feature or explain how MedGuard addresses such issues.
      -   **Finding fake drugs**: Explain that MedGuard helps by allowing verification via NAFDAC/token or reporting with images.

      Keep your responses concise, helpful, and directly related to MedGuard's functionalities.
      `;

      // Prepare the chat history for the API call
      let chatHistory = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model', // 'model' for bot responses in Gemini API
        parts: [{ text: msg.text }]
      }));
      chatHistory.push({ role: 'user', parts: [{ text: input }] }); // Add current user input

      // Construct the payload for the Gemini API
      const payload = {
        contents: chatHistory,
        systemInstruction: {
          parts: [{ text: systemInstruction }]
        }
      };

      // API key is automatically provided by the Canvas environment when left empty
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

      // Make the API call with exponential backoff for retries
      let response;
      let result;
      let retries = 0;
      const maxRetries = 5;
      const baseDelay = 1000; // 1 second

      while (retries < maxRetries) {
        try {
          response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });

          if (response.status === 429) { // Too Many Requests
            const delay = baseDelay * Math.pow(2, retries);
            retries++;
            await new Promise(resolve => setTimeout(resolve, delay));
            continue; // Retry the request
          }

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          result = await response.json();
          break; // Exit loop if successful
        } catch (error) {
          console.error('Fetch error:', error);
          if (retries === maxRetries - 1) throw error; // Re-throw if last retry
          const delay = baseDelay * Math.pow(2, retries);
          retries++;
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }

      // Process the API response
      if (result && result.candidates && result.candidates.length > 0 &&
        result.candidates[0].content && result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0) {
        const botResponseText = result.candidates[0].content.parts[0].text;
        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponseText }]);
      } else {
        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'Sorry, I could not get a response. Please try again.' }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'An error occurred while processing your request. Please try again later.' }]);
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  // Handle Enter key press to send message
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 font-sans">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body { font-family: 'Inter', sans-serif; }
        `}
      </style>
      <header className="bg-blue-600 text-white p-4 shadow-md rounded-b-lg">
        <h1 className="text-2xl font-bold text-center">MedGuard Assistant 💊</h1>
      </header>

      <main className="flex-1 flex flex-col p-4 overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 bg-white rounded-lg shadow-inner mb-4 border border-gray-200">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex mb-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-3 rounded-lg shadow-md ${
                  msg.sender === 'user'
                    ? 'bg-blue-500 text-white rounded-br-none'
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                }`}
              >
                <p className="text-sm sm:text-base">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start mb-3">
              <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-3 rounded-lg shadow-md bg-gray-200 text-gray-800 rounded-bl-none">
                <div className="flex items-center">
                  <span className="dot-flashing"></span>
                  <span className="ml-2">Typing...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} /> {/* Element to scroll to */}
        </div>

        <div className="flex items-center bg-white p-3 rounded-lg shadow-md border border-gray-200">
          <input
            type="text"
            className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            Send
          </button>
        </div>
      </main>

      {/* Basic loading animation CSS */}
      <style jsx>{`
        .dot-flashing {
          position: relative;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #989697;
          color: #989697;
          animation: dotFlashing 1s infinite linear alternate;
          animation-delay: 0.5s;
        }
        .dot-flashing::before, .dot-flashing::after {
          content: '';
          display: inline-block;
          position: absolute;
          top: 0;
        }
        .dot-flashing::before {
          left: -15px;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #989697;
          color: #989697;
          animation: dotFlashing 1s infinite linear alternate;
          animation-delay: 0s;
        }
        .dot-flashing::after {
          left: 15px;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #989697;
          color: #989697;
          animation: dotFlashing 1s infinite linear alternate;
          animation-delay: 1s;
        }

        @keyframes dotFlashing {
          0% { background-color: #989697; }
          50%, 100% { background-color: #ebebeb; }
        }
      `}</style>
    </div>
  );
};

export default App;
