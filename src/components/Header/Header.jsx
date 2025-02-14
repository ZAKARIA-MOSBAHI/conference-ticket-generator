import { assets } from "../../assets/assets";
import styles from "./Header.module.scss";
function Header() {
  const { logo_full } = assets;
  return (
    <header className={styles.header}>
      <img src={logo_full} alt="" />
    </header>
  );
}

export default Header;
