import { useContext } from "react";
import Ticket from "../Ticket/Ticket";
import styles from "./ResultHero.module.scss";
import { AppContext } from "../../context/context";

export default function ResultHero() {
  const { userData } = useContext(AppContext);
  return (
    <div className={styles.resultHero}>
      <div className={styles.resultHero_div}>
        <h1 className={styles.resultHero_div_h1}>
          Congrats,
          <span className={styles.resultHero_div_h1_span}>
            {userData.name} !
          </span>
          Your ticket is ready
        </h1>
        <p className={styles.resultHero_div_p}>
          We've emailed your ticket to{" "}
          <span className={styles.resultHero_div_p_span}>{userData.email}</span>{" "}
          and will send updates in the run up to the event.
        </p>
      </div>
      <Ticket />
    </div>
  );
}
