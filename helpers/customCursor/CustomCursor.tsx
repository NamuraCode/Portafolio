import { Cursor } from '@/interfaces'
import styles from '@/styles/CustomCursor.module.css'
import { useLayoutEffect } from 'react'

export const CustomCursor = ( {left, top} : Cursor) => {
    
    return (
      <div className={`${styles['cursor-main']}`} style={{left: left - 10, top: top - 10}}>
       </div>
     )
  }