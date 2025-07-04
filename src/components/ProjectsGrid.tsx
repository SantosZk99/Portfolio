import React from "react";
import ProjectsGridItem from "./GridItem";

interface Props {
  exampleProp?: string;
}

const ProjectsGrid: React.FC<Props> = ({ exampleProp }) => {
  return (
    <div className="gap-1 grid grid-cols-4 border w-full">
      <ProjectsGridItem />
      <ProjectsGridItem />
      <ProjectsGridItem />
      <ProjectsGridItem />
      <ProjectsGridItem />
      <ProjectsGridItem />
    </div>
  );
};

export default ProjectsGrid;
