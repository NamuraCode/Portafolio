import Image from 'next/image'
import React from 'react'
import styles from '../AboutInfo.module.css'

export const AboutImages = () => {
  return (
    <div className={styles.aboutImages}>
      <Image src="/images/namurasLogo.svg" alt="Namuras-Logo" width={200} height={200} />
    </div>
  )
}
