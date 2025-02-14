import styles from "./GridLines.module.scss";
import { assets } from "../../assets/assets";
function GridLines() {
  const { grid_lines } = assets;
  return (
    <div>
      <img src={grid_lines} className={styles.GridLines} alt="" />
    </div>
  );
}

export default GridLines;
