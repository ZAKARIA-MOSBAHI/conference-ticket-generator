import styles from "./SquigglyLineBottom.module.scss";
import { assets } from "../../assets/assets";
function SquigglyLineBottom() {
  const { squiggly_line_bottom_desktop, squiggly_line_bottom_mobile } = assets;
  return (
    <div className={styles.SquigglyLineBottomContainer}>
      <img
        className={styles.SquigglyLineMobile}
        src={squiggly_line_bottom_mobile}
        alt="decoration"
      />
      <img
        className={styles.SquigglyLineDesktop}
        src={squiggly_line_bottom_desktop}
        alt="decoration"
      />
    </div>
  );
}

export default SquigglyLineBottom;
