import React from "react";

interface Props {
  exampleProp?: string;
}

const ProjectsGridItem: React.FC<Props> = ({ exampleProp }) => {
  return (
    <div className="border hover:border-white/40 border-white/10 flex w-full cursor-pointer p-[2px] gap-1">
      <div className="min-w-[100px] min-h-[100px] bg-white rounded-xs"></div>

      <div className="flex flex-col gap-1">
        <h3 className="text-[18px] font-bold flex items-center text-center">
          This is a title
        </h3>
        <p className="custom-truncate hyphens-auto break-words overflow-hidden text-[12px] leading-tight max-h-[70px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
          exercitationem enim eos modi consequuntur nisi, minima accusantium
          facere deleniti sapiente.
        </p>
      </div>
    </div>
  );
};

export default ProjectsGridItem;
