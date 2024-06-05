import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../imageCreatorStyles/ImgRightSec.module.css";
import Error from "./Error";

function ImgRightSec() {
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [comment, setComment] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/artificialguybr/TshirtDesignRedmond-V2",
        {
          headers: {
            Authorization: "Bearer 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",
          },
          method: "POST",
          body: JSON.stringify({ inputs: message }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImageUrl(imageUrl);
      setComment(message);
    } catch (err) {
      setError("Error while fetching data, please try again!!");
    } finally {
      setIsLoading(false);
      setMessage("");
    }
  }

  return (
    <div className={styles.rightSection}>
      <div className={styles.logo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={styles.logoImage}
        >
          <path
            fillRule="evenodd"
            d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
            clipRule="evenodd"
          />
        </svg>
        <p className={styles.logoText}>Image Fetcher</p>
      </div>
      {error && (
        <div className={styles.errorWrapper}>
          <Error errorMessage={error} />
        </div>
      )}
      {isLoading && (
        <div className={styles.loadingIndicator}>
          <div className={styles.loadingCircle}></div>
          Generating ...
        </div>
      )}
      {imageUrl ? (
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt="Generated" className={styles.fetchedImage} />
          <p className={styles.userMessage}>{comment}</p>
        </div>
      ) : (
        <div className={styles.noContent}>
          <div className={styles.placeholder}>
            <h1 className={styles.placeholderText}>
              Imagine whatever you want , and get the Design 🌟✨
            </h1>
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
      </div>
    </div>
  );
}

export default ImgRightSec;
