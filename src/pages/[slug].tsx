import { useRouter } from "next/router";
import React from "react";

interface Props {
  exampleProp?: string;
}

const ProjectDynamicPage: React.FC<Props> = ({ exampleProp }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="p-1 flex w-full justify-center items-center">
      <div className="max-w-screen-xl p-1 flex flex-col items-center">
        <div className="w-full bg-white h-[200px]"></div>
        <h3 className="text-[70px] capitalize w-full">{slug}</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
          possimus eius porro totam dolorem neque officia labore tempora
          corrupti autem Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Odio possimus eius porro totam dolorem neque officia labore
          tempora corrupti autem Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Odio possimus eius porro totam dolorem neque officia
          labore tempora corrupti autem Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Odio possimus eius porro totam dolorem neque officia
          labore tempora corrupti autem Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Odio possimus eius porro totam dolorem neque officia
          labore tempora corrupti autem beatae iusto explicabo ipsum commodi
          sint quia, quas recusandae ullam!
        </p>
      </div>
    </div>
  );
};

export default ProjectDynamicPage;
