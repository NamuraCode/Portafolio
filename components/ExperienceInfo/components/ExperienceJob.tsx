import styles from "../ExperienceInfo.module.css"

interface ExperienceInfoProps {
  charge: string;
  company: string;
  time: string;
  description: string;
}

export const ExperienceJob = ({
  charge,
  company,
  time,
  description,
}: ExperienceInfoProps) => {
  return (
    <div className={styles.experienceJob}>
      <div>
        <h3>{charge}</h3>
        <h4>{company}</h4>
        <p>{time}</p>
      </div>
      <p>
        {description}
      </p>
    </div>
  );
};
