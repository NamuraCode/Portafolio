import React from 'react'
import styles from './BorderButtons.module.css'

interface BorderButtonsProps {
    text: string
    bgColor: string
}

export const BorderButton = ({text, bgColor}: BorderButtonsProps) => {
  return (
    <button className={styles.borderButton} style={{backgroundColor: `${bgColor}`}}>
        {text}
    </button>
  )
}
