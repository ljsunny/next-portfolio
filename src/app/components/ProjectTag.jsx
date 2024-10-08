import React from 'react';

const ProjectTag = ({name, onClick, isSelected})=> {
  const buttonStyles = isSelected ?
  "border-sky-300 text-white" 
  : "border-slate-600 hover:border-white text-[#ADB7BE]"
  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
            onClick={()=> onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectTag;