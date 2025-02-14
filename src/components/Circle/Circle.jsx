import styles from "./Circle.module.scss";
import { assets } from "../../assets/assets";
function Circle() {
  const { circle } = assets;
  return <img src={circle} className={styles.Circle} alt="" />;
}

export default Circle;
