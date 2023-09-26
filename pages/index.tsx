import { ExperienceMain, HomeMain, PorfileMain } from "@/views";
import { Header, Layout } from "@/components";

export default function Home() {
  return (
    <Layout>
      <Header />
      <HomeMain />
      <PorfileMain />
      <ExperienceMain />
    </Layout>
  );
}
