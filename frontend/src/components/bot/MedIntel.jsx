import { useState, useEffect, useRef } from "react";
import { BotIcon, MessageCircle, X } from "lucide-react";
import Instructions from "./instructions";
// Main App component for the MedGuard Chatbot

const MedIntel = () => {
  // State to store chat messages
  const [messages, setMessages] = useState([]);
  // State to store the current user input
  const [input, setInput] = useState("");
  // State to manage loading indicator during API calls
  const [isLoading, setIsLoading] = useState(false);
  // Ref to scroll to the bottom of the chat window
  const messagesEndRef = useRef(null);
  // State to manage bot visiblity
  const [botVisibility, setBotVisibility] = useState(false);
  // function to toggleBotVisibility
  const toggleBotVisibility = () => {
    setBotVisibility((prev) => !prev);
  };
  // Scroll to the latest message whenever messages state updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Add an initial welcome message when the component mounts
  useEffect(() => {
    setMessages([
      {
        sender: "bot",
        text: "Hello 👋! I am MedIntel your chat bot 🤖 assistant. How can I help you today? You can ask me about verifying drugs, reporting suspicious products, or general information about MedGuard.",
      },
    ]);
  }, []);

  // Function to send a message to the chatbot
  const handleSendMessage = async () => {
    if (input.trim() === "") return; // Prevent sending empty messages

    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]); // Add user message to chat
    setInput(""); // Clear input field
    setIsLoading(true); // Show loading indicator

    try {
      // Define the system instruction for the chatbot
      const systemInstruction = Instructions;
      // Prepare the chat history for the API call
      let chatHistory = messages.map((msg) => ({
        role: msg.sender === "user" ? "user" : "model", // 'model' for bot responses in Gemini API
        parts: [{ text: msg.text }],
      }));
      chatHistory.push({ role: "user", parts: [{ text: input }] }); // Add current user input

      // Construct the payload for the Gemini API
      const payload = {
        contents: chatHistory,
        systemInstruction: {
          parts: [{ text: systemInstruction }],
        },
      };

      // API key is automatically provided by the Canvas environment when left empty
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
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
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (response.status === 429) {
            // Too Many Requests
            const delay = baseDelay * Math.pow(2, retries);
            retries++;
            await new Promise((resolve) => setTimeout(resolve, delay));
            continue; // Retry the request
          }

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          result = await response.json();
          break; // Exit loop if successful
        } catch (error) {
          console.error("Fetch error:", error);
          if (retries === maxRetries - 1) throw error; // Re-throw if last retry
          const delay = baseDelay * Math.pow(2, retries);
          retries++;
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }

      // Process the API response
      if (
        result &&
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0
      ) {
        const botResponseText = result.candidates[0].content.parts[0].text;
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: botResponseText },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "bot",
            text: "Sorry, I could not get a response. Please try again.",
          },
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          text: "An error occurred while processing your request. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  // Handle Enter key press to send message
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div>
      {/* Toggle Button */}
      <div
        className="rounded-full bg-primary-dark fixed bottom-2 right-6 z-50 p-3 cursor-pointer"
        onClick={toggleBotVisibility}
      >
        {botVisibility ? (
          <X size={40} fill="white" color="white" />
        ) : (
          <MessageCircle size={40} fill="white" color="white" />
        )}
      </div>
      {botVisibility && (
        <div className="flex flex-col h-[380px] bg-gray-100 font-nunito fixed top-28 right-6 z-50 rounded-lg">
          <header className="bg-blue-600 text-white p-4 shadow-md rounded-t-lg font-nunito font-bold">
            <h1 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
              MedIntel <BotIcon color="#fff" />
            </h1>
          </header>
          <main className="flex-1 flex flex-col p-4 overflow-hidden  font-nunito">
            <div className="flex-1 overflow-y-auto p-4 bg-white rounded-lg shadow-inner mb-4 border border-gray-200">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex mb-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs  p-3 rounded-lg shadow-md ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white rounded-br-none"
                        : "bg-gray-200 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm sm:text-base">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-3">
                  <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-3 rounded-lg shadow-md bg-gray-200 text-gray-800 rounded-bl-none">
                    <div className="flex items-center space-x-2">
                      <span>Thinking</span>
                      <div className="flex space-x-1">
                        <span className="dot-flashing" />
                        <span
                          className="dot-flashing"
                          style={{ animationDelay: "0.2s" }}
                        />
                        <span
                          className="dot-flashing"
                          style={{ animationDelay: "0.4s" }}
                        />
                      </div>
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
              width: 8px;
              height: 8px;
              background-color: #989697;
              border-radius: 50%;
              animation: dotFlashing 1s infinite ease-in-out;
            }

            @keyframes dotFlashing {
              0%,
              80%,
              100% {
                opacity: 0;
              }
              40% {
                opacity: 1;
              }
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default MedIntel;
