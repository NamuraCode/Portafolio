import { useLayoutEffect } from 'react'
import { Cursor } from '@/interfaces'
import styles from '@/styles/CustomCursor.module.css'
import mainStyles from '@/styles/MainStyles.module.css'

export const CustomCursor = ( {left, top} : Cursor) => {
    
    return (
      <div className={`${styles['cursor-main']} ${mainStyles['others']}`} style={{left: left - 15, top: top - 10}}>
       </div>
     )
  }