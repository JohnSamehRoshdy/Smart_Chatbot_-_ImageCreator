import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className={styles.header}>
        <h1>Welcome to Our App Suite</h1>
        <p>Select an option to get started:</p>
      </div>
      <div className={styles.options}>
        <Link to="/chatbot" className={styles.optionCard}>
          <div className={styles.optionContent}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles.optionIcon}
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12c0 4.1 2.47 7.61 6 9.19V22l4-1.21c1.06.23 2.16.36 3.32.36 5.52 0 10-4.48 10-10S17.52 2 12 2zM7 12c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm6 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <h2>Chatbot App</h2>
            <p>Interact with our smart chatbot.</p>
          </div>
        </Link>
        <Link to="/imagecreator" className={styles.optionCard}>
          <div className={styles.optionContent}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles.optionIcon}
            >
              <path
                fillRule="evenodd"
                d="M4 4h16v16H4V4zm8 14a1 1 0 110-2 1 1 0 010 2zm-3-4l2-2 3 3 4-4v4H8v-1zm2-8h6v6h-2V8h-2V6H8v6H6V6h4V4z"
                clipRule="evenodd"
              />
            </svg>
            <h2>Image Creator App</h2>
            <p>Create unique images with AI.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
