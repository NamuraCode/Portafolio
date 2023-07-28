import { useAppSelector } from "@/store/hook/useRedux";
import { getInfo } from "@/utils";

export const NamuraTitle = () => {
  const { indexLanguage } = useAppSelector((state) => state.language);
  const { contact_me } = getInfo();
  return (
    <article className='namura-title'>
      <h1 className='title-name'>
        David Naranjo <span className='name-job'>Fullstack developer</span>
      </h1>
      <button className='btn'>{contact_me[indexLanguage]}</button>
    </article>
  );
};
