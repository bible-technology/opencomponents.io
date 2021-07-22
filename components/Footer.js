import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
         <img src="/eten-inno-lab-light.svg" alt="ETEN Innovation Lab Logo" className={styles.logo} />
      </footer>
    </>
  )
}
