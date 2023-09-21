import { useAppSelector } from '@/store';
import styles from '@/styles/ExperienceBar.module.css'
import { useEffect } from 'react';

export const ExperienceBar = () => {
  const { mouseY } = useAppSelector((state) => state.experienceMouse);
  useEffect(()=>{
    console.log(mouseY);
  },[mouseY])
  return (
    <div className={`${styles['experience-bar']}`}>
    </div>
  );
};
