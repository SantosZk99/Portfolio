import React from "react";

interface Props {
  exampleProp?: string;
}

const Presentations: React.FC<Props> = ({ exampleProp }) => {
  return (
    <div className="p-1 flex justify-center w-full mt-10">
      <div className="max-w-screen-xl gap-[2px] grid-cols-1 lg:grid-cols-2 grid w-full ">
        <div className="border-[1px] border-white/10 flex flex-col gap-4 p-2">
          <h2 className="text-xl font-bold">About me</h2>
          <p className="text-white/75">
            LLorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            esse maxime voluptates eveniet. Animi veniam dolorem distinctio.
            Iure, nulla ex nihil illum eum voluptatibus quia ullam repudiandae
            dignissimos non voluptate.orem ipsum dolor sit amet consectetur
            adipisicing elit. Aliquam esse maxime voluptates eveniet. Animi
            veniam dolorem distinctio. Iure, nulla ex nihil illum eum
            voluptatibus quia ullam repudiandae dignissimos non voluptate.
          </p>
        </div>

        <div className="border-[1px] border-white/10 flex flex-col gap-4 p-2">
          <h2 className="text-xl font-bold">My skills</h2>
          <p className="text-white/75">
            LLorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            esse maxime voluptates eveniet. Animi veniam dolorem distinctio.
            Iure, nulla ex nihil illum eum voluptatibus quia ullam repudiandae
            dignissimos non voluptate.orem ipsum dolor sit amet consectetur
            adipisicing elit. Aliquam esse maxime voluptates eveniet. Animi
            veniam dolorem distinctio. Iure, nulla ex nihil illum eum
            voluptatibus quia ullam repudiandae dignissimos non voluptate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentations;
