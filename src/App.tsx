import { DarkThemeToggle } from "flowbite-react";

export const App = () => {
  return (
    <>
      <div className="fixed end-0 bottom-0 m-3 z-10">
        <DarkThemeToggle className="bg-violet-800 text-white hover:text-white hover:bg-purple-700 dark:hover:bg-purple-700 dark:text-white" />
      </div>
    </>
  );
};
