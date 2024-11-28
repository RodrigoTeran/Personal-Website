import styles from './Title.module.scss'

export default function Title() {
  return (
    <div className={styles.title_wrapper}>
      <h1 className={styles.title}>
        Rodrigo Terán
        <br />
        Hernández
      </h1>
      <div className={styles.title_underline}></div>
    </div>
  )
}
