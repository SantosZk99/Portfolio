import React from "react";
import ProjectsGridItem from "./GridItem";

type Props = Record<string, unknown>;

const ProjectsGrid: React.FC<Props> = ({}) => {
  return (
    <div className="gap-1 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
      <ProjectsGridItem tileTitle="test" />
      <ProjectsGridItem tileTitle="test" />
      <ProjectsGridItem tileTitle="test" />
      <ProjectsGridItem tileTitle="test" />
      <ProjectsGridItem tileTitle="test" />
      <ProjectsGridItem tileTitle="test" />
      <ProjectsGridItem tileTitle="test" />
      <ProjectsGridItem tileTitle="test" />
      <ProjectsGridItem tileTitle="test" />
      <ProjectsGridItem tileTitle="test" />
      <ProjectsGridItem tileTitle="test" />
      <ProjectsGridItem tileTitle="test" />
      <ProjectsGridItem tileTitle="test" />
      <ProjectsGridItem tileTitle="test" />
    </div>
  );
};

export default ProjectsGrid;
