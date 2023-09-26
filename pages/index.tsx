import { ExperienceMain, HomeMain, ProfileMain } from "@/views";
import { Header, Layout } from "@/components";

export default function Home() {
  return (
    <Layout>
      <Header />
      <HomeMain />
      <ProfileMain />
      <ExperienceMain />
    </Layout>
  );
}
