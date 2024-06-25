import styles from './header.module.css';

export default function Header(){
  return (
    <div className={styles.header}>
      Can you guess the
      <span className={styles.italicheader}>word</span>
    </div>
  );
}