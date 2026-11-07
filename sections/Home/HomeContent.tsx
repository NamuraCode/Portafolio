import { HomeContact, HomeInfo } from '@/components';
import { info } from '@/db/info';
import styles from './HomeContent.module.css';

export const HomeContent = () => {
  const { home } = info;
  return (
    <section id="home" className={styles.home}>
      <HomeInfo
        role={home.role}
        welcome={home.welcome}
        description={home.description}
        showMore={home.showMore}
      />
      <HomeContact contactLabel={home.cta} />
    </section>
  );
};
