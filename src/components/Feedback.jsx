import styles from "./feedback.module.css";

export default function Feedback({over, message}){

  return(
    <div className={styles.messageContainer}>
      <h1>{message}</h1>
    </div>
  );
}