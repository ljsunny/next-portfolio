import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link"
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group m-5 group-hover:bg-[#181818]"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 gap-2">
          <Link href={gitUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white ">
            <CodeBracketIcon className="h-10 w-10 cursor-pointer text-[#ADB7BE] top-1/2 left-1/2 absolute transform -translate-y-1/2 -translate-x-1/2 hover:text-white"></CodeBracketIcon>
          </Link>
          <Link href={previewUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white ">
            <EyeIcon className="h-10 w-10 cursor-pointer text-[#ADB7BE] top-1/2 left-1/2 absolute transform -translate-y-1/2 -translate-x-1/2 hover:text-white"></EyeIcon>
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl py-2 px-6">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
    </div>
  );
};

export default ProjectCard;
