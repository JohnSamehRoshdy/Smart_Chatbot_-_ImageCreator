import styles from "../imageCreatorStyles/ImageCreator.module.css";
import ImgLeftSec from "../ImageCreatorComponents/ImgLeftSec";
import ImgRightSec from "../ImageCreatorComponents/ImgRightSec";

function ImageCreator() {
  return (
    <div className={styles.mainpage}>
      <div className={styles.leftOut}>
        <ImgLeftSec />
      </div>
      <div className={styles.rightOut}>
        <ImgRightSec />
      </div>
    </div>
  );
}

export default ImageCreator;
