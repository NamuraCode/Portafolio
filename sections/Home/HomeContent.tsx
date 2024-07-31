import { HomeContact, HomeInfo } from '@/components'
import styles from './HomeContent.module.css'

export const HomeContent = () => {
  return (
    <section id="home" className={styles.home}>
      <HomeInfo />
      <HomeContact />
    </section>
  )
}
