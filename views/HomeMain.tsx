import { NamuraTitle, NamuraModel } from '@/components'
import styles from '@/styles/HomeMain.module.css'

export const HomeMain = () => {

    return (
        <section className={styles['namura-home']}>
            <NamuraTitle />
            <NamuraModel />
        </section>
     )
  }