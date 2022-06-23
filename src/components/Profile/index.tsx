
import styles from "./style.module.scss";

import dropDownSVG from "/src/assets/drop-down.svg";

export function Profile() {
  return (
    <div className={styles.profile}>
      <img className={styles.profilePicture} src="https://github.com/gabrielLV-BR.png" alt="" />
      <p>Your Name</p>  
      <img className={styles.dropdown} src={dropDownSVG} alt="" />
    </div>
  );
}