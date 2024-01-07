import styles from '@/styles/ContactMap.module.css'

export const ContactMap = () => {
  return (
    <div className={styles.mapMain}>
        <h2 className={`${styles.titles}`}>Contact</h2>
        <h4 className={styles.text}>Ask me something</h4>
        <iframe
            className={`${styles.map}`}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77468.28422962174!2d-75.59531486040966!3d6.306364478028248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442fa6958e1777%3A0x837c07a666cf50f0!2sBello%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1703448264448!5m2!1ses!2sco"
            width="600"
            height="450"
            style={{border:0}}
            loading="lazy"
        ></iframe>
        <h4 className={styles.location}>Colombia Medellin</h4>
    </div>
  );
};
