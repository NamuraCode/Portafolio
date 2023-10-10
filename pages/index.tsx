import { ExperienceMain, HomeMain, ProfileMain, ProjectsMain, Ad } from "@/views";
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
    </Layout>
  );
}
