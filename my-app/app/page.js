import TopicsList from "@/components/TopicsList";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <TopicsList />;
}
