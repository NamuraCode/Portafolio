import Image from "next/image";

export const ProjectCard = () => {
  return (
    <div className={'card'}>
      <Image src={""} width={100} height={100} alt="projectImage"></Image>
      <h3>Name Project</h3>
    </div>
  );
};
