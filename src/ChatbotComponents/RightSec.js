import { useState } from "react";
import styles from "../chatbotstyles/RightSec.module.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Error from "./Error";
import { Link } from "react-router-dom";

function RightSec() {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const API_KEY = ""; // place your api key here
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const chat = model.startChat({
        history: allMessages,
        generationConfig: {
          maxOutputTokens: 100,
        },
      });
      const msg = message;
      const result = await chat.sendMessage(msg);
      // console.log(result.response.text());
    } catch (err) {
      setError("Error while fetching data , please try again !!");
    } finally {
      setIsLoading(false);
      setMessage("");
    }
  }

  function handleClearChat() {
    setAllMessages([]);
    setMessage("");
  }

  return (
    <div className={styles.rightSection}>
      <div className={styles.logo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" />
        </svg>

        <p className={styles.logoText}>Budget assistant</p>
      </div>
      {allMessages.length > 0 ? (
        <div className={styles.messages}>
          {allMessages.map((msg, index) => (
            <div
              key={index}
              className={`${styles.message} ${
                msg.role === "user" ? styles.userMessage : styles.botMessage
              }`}
            >
              <div className={styles.messageHeader}>
                {msg.role === "user" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" />
                  </svg>
                ) : (
                  <img src="/photos/logo2.png" alt="logo" />
                )}
                <h2 className={styles.messageSender}>
                  {msg.role === "user" ? "You" : "Budget Bot"}
                </h2>
              </div>
              <p className={styles.messageContent}>{msg.parts[0].text}</p>
            </div>
          ))}
          {isLoading ? (
            <div className={styles.loadingIndicator}>
              <div className={styles.loadingCircle}></div>
              Generating ...
            </div>
          ) : null}
          {error && (
            <div className={styles.errorWrapper}>
              <Error errorMessage={error} />
            </div>
          )}
        </div>
      ) : (
        <div className={styles.nochat}>
          <div className={styles.s1}>
            <img
              src="/photos/logo2.png"
              alt="Chat logo"
              className={styles.chatImage}
            />
            <h1 className={styles.chatText}>How can I help you today?</h1>
          </div>
        </div>
      )}

      <div className={styles.bottomSection}>
        <form className={styles.messagebar} onSubmit={sendMessage}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Type your message here..."
            className={styles.inputText}
          />
          <button type="submit" className={styles.sendButtonContainer}>
            <svg
              className={styles.sendButton}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </form>
        <button className={styles.sendButtonContainer}>
          <Link to="/">
            <svg
              className={styles.sendButton}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" />
            </svg>
          </Link>
        </button>
        <button
          onClick={handleClearChat}
          className={styles.deleteButtonContainer}
        >
          <svg
            className={styles.sendButton}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default RightSec;
