import { ExperienceMain, HomeMain, ProfileMain, ProjectsMain } from "@/views";
import { Header, Layout } from "@/components";

export default function Home() {
  return (
    <Layout>
      <Header />
      <HomeMain />
      <ProfileMain />
      <ExperienceMain />
      <ProjectsMain />
    </Layout>
  );
}
