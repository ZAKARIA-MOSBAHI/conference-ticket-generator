import styles from "./ErrorLine.module.scss";
import { assets } from "../../assets/assets";

function ErrorLine({ Icon = true, text, color = "hsl(245, 15%, 58%)" }) {
  const { icon_info } = assets;
  return (
    <div className={styles.err}>
      {Icon && <img src={icon_info} alt="" />}
      <p style={{ color: color }}>{text}</p>
    </div>
  );
}

export default ErrorLine;
