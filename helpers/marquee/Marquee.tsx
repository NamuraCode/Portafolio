import styles from '@/styles/Marquee.module.css';

export const Marquee = () => {
  return (
    <div className={`${styles.marquee}`}>
      <ul className={`${styles['marquee-content']}`}>
        <li className={`${styles['marquee-item']}`}>&nbsp;developer &bull;</li>
        <li className={`${styles['marquee-item']}`}>&nbsp;developer &bull;</li>
        <li className={`${styles['marquee-item']}`}>&nbsp;developer &bull;</li>
        <li className={`${styles['marquee-item']}`}>&nbsp;developer &bull;</li>
        <li className={`${styles['marquee-item']}`}>&nbsp;developer &bull;</li>
        <li className={`${styles['marquee-item']}`}>&nbsp;developer &bull;</li>
        <li className={`${styles['marquee-item']}`}>&nbsp;developer &bull;</li>
        <li className={`${styles['marquee-item']}`}>&nbsp;developer &bull;</li>
      </ul>
    </div>
  );
};
