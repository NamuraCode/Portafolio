import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components";
import { ExperienceMain, HomeMain } from "@/views";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Layout } from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Header />
      <HomeMain />
      <ExperienceMain />
    </Layout>
  );
}
