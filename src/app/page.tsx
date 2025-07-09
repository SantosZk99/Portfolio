// import Image from "next/image";
import Header from "../components/Header";
// import { Container } from "postcss";
import Presentations from "../presentation";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* <div className="w-full max-w-screen-xl"> */}
      {/* <div className="bg-white w-full"> */}
      <Header />
      {/* </div> */}

      <main className="px-[2px] max-w-screen-xl flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Presentations />
        <ProjectsGrid />
      </main>

      <Footer />

      {/* </div> */}
    </div>
  );
}
