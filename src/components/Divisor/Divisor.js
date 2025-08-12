import styles from './divisor.module.scss'

export default function Divisor({name}) {
  return (
    <div className={styles.divisor}>
      <h1>{name}</h1>
    </div>
  );
}
