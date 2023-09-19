import { Home } from '@/components'
import { NumberPage } from '@/helpers'

import styles from '@/styles/HomeMain.module.css'

export const HomeMain = () => {

    return (
        <section id='home' className={styles['namura-home']}>
            <Home/>
            <NumberPage numberPage={'01'}/>
        </section>
     )
  }