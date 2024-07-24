import { info } from "@/db/info"
import styles from './ExperienceInfo.module.css'
import { useGlobal } from "@/store"

export const ExperienceInfoArt = () => {
  const { language } = useGlobal()
  const { experience } = info
  const experiences = experience
  return (
    <div className={styles.expContent}>
      {/* {experiences.map} */}
    </div>
  )
}
