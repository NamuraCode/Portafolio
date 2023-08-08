import styles from '@/styles/Marquee.module.css';

export const Marquee = () => {
  return (
    <div className={`${styles.marquee}`}>
      <ul className={`${styles['marquee-content']}`}>
        <li>developer</li>
      </ul>
    </div>
  );
};
