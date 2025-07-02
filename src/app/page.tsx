import Image from "next/image";
import Header from "../components/Header";
import { Container } from "postcss";
import Presentations from "../presentation";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* <div className="w-full max-w-screen-xl"> */}

      <Header />

      <Presentations />

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        This is a portfolio
      </main>
      {/* </div> */}
    </div>
  );
}
