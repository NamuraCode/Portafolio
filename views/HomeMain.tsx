import { Home } from '@/components'

import styles from '@/styles/HomeMain.module.css'
import mainStyles from '@/styles/MainStyles.module.css'

export const HomeMain = () => {

    return (
        <section id='home' className={`${styles['namura-home']} ${mainStyles['others']}`}>
            <Home/>
        </section>
     )
  }