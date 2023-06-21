import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";

export default function ThemeMenu() {
  // const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(undefined);

  // const showMenu = () => setMenu(!menu);

  const switchMode = () => {
    console.log("darkMode");
    setDarkMode(!darkMode);
  };
  // const darkHandler = () => {
  //   console.log("darkMode");
  //   setDarkMode(true);
  //   setMenu(false);
  // };

  // const lightHandler = () => {
  //   console.log("lightMode");
  //   setDarkMode(false);
  //   setMenu(false);
  // };

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
    } else if (darkMode === false) {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    }
  }, [darkMode]);

  return (
    <div className="absolute inline-block text-left right-1  -translate-x-1/2 top-7 ">
      <button
        onClick={switchMode}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-xl bg-gray-200 px-3 py-2
         text-sm font-semibold text-gray-600 shadow-sm  ring-gray-300 hover:bg-gray-50 dark:bg-slate-800 dark:text-gray-300"
      >
        Theme
        {darkMode ? (
          <MoonIcon className="mx-1 h-5 w-5 text-gray-300" aria-hidden="true" />
        ) : (
          <SunIcon className="mx-1 h-5 w-5 text-gray-600" aria-hidden="true" />
        )}
      </button>

      {/* {menu && (
        <div
          className="absolute left-0 z-10 mt-2 w-full rounded-xl
         bg-white shadow-lg ring-1 ring-gray-700 ring-opacity-5 dark:bg-slate-800
           focus:outline-none"
        >
          <button
            className={`block mx-auto w-full hover:rounded-t-xl  py-2 text-sm text-gray-600 dark:text-gray-300 dark:hover:bg-gray-600   hover:bg-gray-100
                    hover:text-gray-900 `}
            onClick={lightHandler}
          >
            Light
          </button>

          <button
            className={`block mx-auto w-full hover:rounded-b-xl  py-2 text-sm text-gray-600
            dark:text-gray-300 dark:hover:bg-gray-600  hover:bg-gray-100
                    hover:text-gray-900 `}
            onClick={darkHandler}
          >
            Dark
          </button>
        </div>
      )} */}
    </div>
  );
}
