import { useContext } from "react";
import { assets } from "../../assets/assets";
import styles from "./Ticket.module.scss";
import { AppContext } from "../../context/context";
export default function Ticket() {
  const { ticket, github_icon, logo_full } = assets;
  const { userData } = useContext(AppContext);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = userData.date.getFullYear();
  const month = months[userData.date.getMonth()];
  const day = userData.date.getDate();
  return (
    <div className={styles.ticketContainer}>
      <img src={ticket} alt="" className={styles.ticket} />
      <div className={styles.ticketContainer_div1}>
        <img src={logo_full} alt="" className={styles.logo_full} />
        <p className={styles.ticketContainer_div1_p}>
          {`${month} ${day} , ${year}`} / Hay Riad , Rabat
        </p>
      </div>
      <div className={styles.ticketContainer_div2}>
        <img src={userData.photo} alt="" className={styles.avatar} />
        <div className={styles.ticketContainer_div2_div}>
          <h4>{userData.name}</h4>
          <div className={styles.ticketContainer_div2_div_div}>
            <img src={github_icon} className={styles.github_icon} alt="" />
            <p>@{userData.username}</p>
          </div>
        </div>
      </div>
      <h1 className={styles.ticketContainer_h1}>#2537</h1>
    </div>
  );
}
