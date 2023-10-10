import { ProjectsTitle } from './components'
import styles from '@/styles/Projects.module.css'

export const Projects = () => {

    return (
      <article className={styles['projects']}>
        <ProjectsTitle/>
       </article>
     )
  }