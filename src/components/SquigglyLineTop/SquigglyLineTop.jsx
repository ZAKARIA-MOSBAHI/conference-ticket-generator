import styles from "./SquigglyLineTop.module.scss";
import { assets } from "../../assets/assets";
function SquigglyLineTop() {
  const { squiggly_line_top } = assets;
  return (
    <img
      className={styles.SquigglyLineTop}
      src={squiggly_line_top}
      alt="line top"
    />
  );
}

export default SquigglyLineTop;
