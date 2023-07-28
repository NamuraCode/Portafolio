import { useEffect, useLayoutEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook/useRedux";
import { setExperience } from "../../store/slice/experienceSlice/experienceSlice";
import { getInfo } from "../../utils";

export const Experience = () => {
  const devRef = useRef<HTMLAnchorElement>(null);
  const modelRef = useRef<HTMLAnchorElement>(null);
  const contentExperience = useRef<HTMLDivElement>(null);
  const { indexLanguage } = useAppSelector((state) => state.language);
  const { select, modeling_3d, experiences_jobs } = getInfo();
  const { nameExperience, job } = useAppSelector(
    (state) => state.experience
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setExperience({ name: "dev", job: experiences_jobs, changeLanguage: indexLanguage }));
  },[])

  useLayoutEffect(() => {
    console.log(nameExperience);
    
    if (nameExperience === "dev") {
      const widthDev = devRef.current?.offsetWidth;
      contentExperience.current?.style.setProperty(
        "--barExperienceWidth",
        `${widthDev}px`
      );
      contentExperience.current?.style.setProperty(
        "--barExperienceLeft",
        `0px`
      );
    }

    if (nameExperience === "model") {
      const widthContent = contentExperience.current?.offsetWidth;
      const move = widthContent!! - (modelRef.current?.offsetWidth! + 48);
      const widthModel = modelRef.current?.offsetWidth;
      contentExperience.current?.style.setProperty(
        "--barExperienceWidth",
        `${widthModel}px`
      );
      contentExperience.current?.style.setProperty(
        "--barExperienceLeft",
        `${move}px`
      );
    }
    
  }, [nameExperience]);

  return (
    <article className="experience-info">
      <div className="experience-navbar">
        <h3 className="experience-navbar-title">{select[indexLanguage]}</h3>
        <div className="experience-navbar-jobs" ref={contentExperience}>
          <a
            ref={devRef}
            className="jobs-experience"
            onClick={() => {
              dispatch(
                setExperience({
                  name: "dev",
                  job: experiences_jobs,
                  changeLanguage: indexLanguage,
                })
              );
            }}
          >
            Developer
          </a>
          <a
            ref={modelRef}
            className="jobs-experience"
            onClick={() => {
              dispatch(
                setExperience({
                  name: "model",
                  job: experiences_jobs,
                  changeLanguage: indexLanguage,
                })
              );
            }}
          >
            {modeling_3d[indexLanguage]}
          </a>
        </div>
      </div>
        <ul className="experience-navbar-items">
          {job.map((item, index) => {
            return (
              <li className="experience-navbar-item" key={index}>
                <a
                  key={index}
                  className="experience-item"
                  href={`#${index}`}
                >
                  {item.date[indexLanguage]}
                </a>  
                <div className="experience-item-info">
                  <p>
                    <span>{item.company}</span>
                    <br/>
                    {item.description[indexLanguage]}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
    </article>
  );
};

