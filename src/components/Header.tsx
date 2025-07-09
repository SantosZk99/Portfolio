import Image from "next/image";
import React from "react";

// assets
import logoGithub from "../../public/logos/github-mark-white.png";
import logoLeetcode from "../../public/logos/LeetCode_logo_black.png";

type Props = Record<string, unknown>;

const Header: React.FC<Props> = ({}) => {
  return (
    <div className="flex justify-between w-full max-w-screen-xl p-2">
      {/* Picture */}
      <div className="flex items-center gap-4">
        <div className="bg-white h-[50px] w-[50px]"></div>
        <div className="leading-4 flex flex-col">
          J.B. Santos <span className="text-xs">Software Dev.</span>{" "}
        </div>
      </div>

      {/* Socials */}
      <div className="flex items-center gap-2 ">
        <Image
          placeholder="blur"
          quality={75}
          alt="github"
          src={logoGithub}
          width={30}
        />
        <Image
          placeholder="blur"
          quality={75}
          alt="leetcode"
          src={logoLeetcode}
          width={30}
        />
      </div>
    </div>
  );
};

export default Header;
