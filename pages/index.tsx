import { ExperienceMain, HomeMain, ProfileMain, ProjectsMain, Ad, ContactMain } from "@/views";
import { Header, Layout } from "@/components";

export default function Home() {
  return (
    <Layout>
      <Ad />
      <Header />
      <HomeMain />
      <ProfileMain />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMain />
    </Layout>
  );
}
