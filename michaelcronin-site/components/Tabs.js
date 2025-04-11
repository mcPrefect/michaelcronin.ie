import React from "react";

const TabButton = ({ isActive, label, onClick }) => {
  const baseTabStyle =
    "px-4 py-2 border-b-2 font-medium text-gray-500 hover:text-blue-600 hover:border-blue-600 dark:text-gray-400 dark:hover:text-blue-400";
  const activeTabStyle =
    "px-4 py-2 border-b-2 font-medium text-blue-600 border-blue-600 dark:text-blue-400";
  return (
    <button
      className={isActive ? activeTabStyle : baseTabStyle}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </button>
  );
};

const Tabs = ({ tab, setTab }) => {
  const tabs = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "photography", label: "Photography" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="flex justify-center space-x-6 border-b mb-12">
      {tabs.map(({ id, label }) => (
        <TabButton
          key={id}
          isActive={tab === id}
          label={label}
          onClick={() => setTab(id)}
        />
      ))}
    </div>
  );
};

export default Tabs;