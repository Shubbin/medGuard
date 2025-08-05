// components/ChatwootWidget.jsx
import { useEffect } from "react";

const ChatwootWidget = () => {
  useEffect(() => {
    // Check if script is already injected
    if (window.chatwootSDK) return;

    const script = document.createElement("script");
    script.src = "https://app.chatwoot.com/packs/js/sdk.js";
    script.async = true;
    script.onload = () => {
      window.chatwootSDK.run({
        websiteToken: "ZsUkiyjfUAAEjMUj3Eu38udQ",
        baseUrl: "https://app.chatwoot.com",
      });
    };
    document.body.appendChild(script);
  }, []);

  return null; // No UI needed
};

export default ChatwootWidget;
