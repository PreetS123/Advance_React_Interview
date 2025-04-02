import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { challenges } from "../utils/routes";

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // const dropDownRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const dropDownRef = useRef<{ [key: string]: HTMLDivElement | null }>({});


  const handleClickOutside = (event: MouseEvent) => {
    let clickInsideDropdown = false;
    Object.values(dropDownRef.current).forEach((dropdown) => {
      if (dropdown && !dropdown.contains(event.target as Node)) {
        clickInsideDropdown = true;
      }
    });
    if (!clickInsideDropdown) {
      setOpenDropdown(null);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="bg-gray-800 text-white p-4 overflow-x-auto whitespace-nowrap flex items-center space-x-4">
        {Object.keys(challenges)?.map((phase) => {
          return (
            <div key={phase} className="relative">
              <button
                onMouseEnter={() => setOpenDropdown(phase)}
                // onMouseLeave={() => setOpenDropdown(null)}
                onMouseDown={() =>
                  setOpenDropdown(openDropdown === phase ? null : phase)
                }
                className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
              >
                {phase}
              </button>
              {openDropdown == phase && (
                <div
                ref={(el) => {
                  if (el) {
                    dropDownRef.current[phase] = el;
                  }
                }}
                
                  className="fixed top-14 mt-2 w-40 bg-white text-black rounded shadow-lg z-1000"
                >
                  {challenges[phase]?.map((challenge) => (
                    <NavLink
                      key={challenge.path}
                      to={challenge.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 ${
                          isActive
                            ? "bg-blue-500 text-white"
                            : "hover:bg-gray-200"
                        }`
                      }
                    >
                      {" "}
                      {challenge.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
