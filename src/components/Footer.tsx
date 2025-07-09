import React from "react";

type Props = Record<string, unknown>;

const Footer: React.FC<Props> = ({}) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-10 w-full p-2">
      <div className="gap-4 w-full flex flex-col items-center">
        <ul className="text-lg sm:text-xl text-white/80 flex gap-5 w-full justify-center items-center">
          <li>Github</li>
          <li>Leetcode</li>
          <li>Email</li>
          <li>Telegram</li>
        </ul>
        <span className="border-b-0 border border-white/20 w-full"></span>{" "}
        <span className="text-sm text-white/50 italic">
          J.B. Santos {currentYear}. No Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
