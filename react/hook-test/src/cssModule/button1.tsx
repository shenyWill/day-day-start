import styles from './button1.module.scss';
export default function () {
  return <div className={styles['btn-wrapper']}>
    <button className={styles.btn}>button1</button>
  </div>
}