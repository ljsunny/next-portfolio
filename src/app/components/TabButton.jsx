import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}
            className='mr-3'>
      <p className={`font-semibold hover:text-white ${buttonClasses}`}></p>
      {children}
    </button>
  );
};

export default TabButton;
