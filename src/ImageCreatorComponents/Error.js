import styles from "../imageCreatorStyles/Error.module.css";
function Error({ errorMessage }) {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
          />
        </svg>
      </div>
      <div className={styles.errorMessage}>
        <h2>Oops! Something went wrong.</h2>
        <p>{errorMessage}</p>
      </div>
    </div>
  );
}

export default Error;
