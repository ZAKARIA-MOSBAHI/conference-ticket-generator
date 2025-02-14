import ErrorLine from "../ErrorLine/ErrorLine";
import styles from "./Input.module.scss";

export default function Input({ label, type, placeholder, ref, err }) {
  return (
    <div className={styles.formRow}>
      <label className={styles.label}>{label}</label>
      <input type={type} placeholder={placeholder} ref={ref} required />
      <ErrorLine text={err} color="red" Icon={false} />
    </div>
  );
}
