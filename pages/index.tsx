import { ExperienceMain, HomeMain } from "@/views";
import { Header, Layout } from "@/components";

export default function Home() {
  return (
    <Layout>
      <Header />
      <HomeMain />
      <ExperienceMain />
    </Layout>
  );
}
