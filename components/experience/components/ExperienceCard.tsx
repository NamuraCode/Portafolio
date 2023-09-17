import { ExperienceCardProps } from "@/interfaces";

export const ExperienceCard = ({
  company,
  description,
}: ExperienceCardProps) => {
  return(
    <div>
        <h4>{company}</h4>
        <p>{description}</p>
    </div>
  )
};
