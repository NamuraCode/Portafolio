import { HomeContact, HomeInfo } from '@/components';
import { info } from '@/db/info';
import styles from './HomeContent.module.css';

export const HomeContent = () => {
  const { home, header } = info;
  const contactLabel = header[header.length - 1];
  return (
    <section id="home" className={styles.home}>
      <HomeInfo
        welcome={home.welcome}
        description={home.description}
        showMore={home.showMore}
      />
      <HomeContact contactLabel={contactLabel} />
    </section>
  );
};
