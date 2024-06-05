import styles from "../chatbotstyles/Chatbot.module.css";
import LeftSec from "../ChatbotComponents/LeftSec";
import RightSec from "../ChatbotComponents/RightSec";

function Chatbot() {
  return (
    <div className={styles.mainpage}>
      <div className={styles.leftOut}>
        <LeftSec />
      </div>
      <div className={styles.rightOut}>
        <RightSec />
      </div>
    </div>
  );
}

export default Chatbot;
