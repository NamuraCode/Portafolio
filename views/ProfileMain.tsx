import { Profile } from "@/components";
import mainStyles from "@/styles/MainStyles.module.css";

export const ProfileMain = () => {
  return (
    <section id='about' className={`${mainStyles["sections"]}`}>
      <Profile />
    </section>
  );
};
