import React from "react";

interface Props {
  exampleProp?: string;
}

const ProjectsGridItem: React.FC<Props> = ({ exampleProp }) => {
  return (
    <div className="border flex w-full max-w-[400px] p-[1.5px] gap-1">
      <div className="min-w-[100px] min-h-[100px] bg-white"></div>

      <div className="flex flex-col gap-1">
        <h3 className="text-[15px] font-bold">This is a title</h3>
        <p className="text-[12px] max-h-[70px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet
          Lorem sit consectetur adipisicing elit. Neque amet
        </p>
      </div>
    </div>
  );
};

export default ProjectsGridItem;
