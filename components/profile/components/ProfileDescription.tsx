import styles from "@/styles/ProfileDescription.module.css";

export const ProfileDescription = () => {
  return (
    <>
      <p className={`${styles["profileTitle"]}`}>
        Desarrollador Full-Stack JavaScript, cursado en Digital House y Misión
        Tic 2021. Con competencias en lenguajes como, JavaScript, Typescript,
        Python, Java, HTML y CSS. Gestión de repositorios con Git y Github.
        Creación y consumo de APIS mediante tecnologías como Node, Express y
        React. Y bases de datos SQL (Mysql, sequelize) y NoSQL (MongoDb). Desde
        las cuales desarrollo soluciones digitales perdurables y escalables. Con
        experiencia en grupos de investigación de desarrollo de tecnologías y
        creación de páginas web con el stack MERN, bajo metodologías scrum
        diferenciando el trabajo por el esfuerzo de mejorar y la curiosidad de
        aprender e implementar tecnologías nuevas.
      </p>
    </>
  );
};
