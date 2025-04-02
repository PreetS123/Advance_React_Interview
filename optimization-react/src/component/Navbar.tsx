import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const challenges: Record<string, string[]> = {
  Phase1: ["challenge1", "challenge2", "challenge3"],
  Phase2: ["challenge1", "challenge2", "challenge3"],
};

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  return (
    <>
      <div className="bg-gray-800 text-white p-4 overflow-x-auto whitespace-nowrap flex items-center space-x-4">
        {Object.keys(challenges)?.map((phase) => {
          return (
            <div key={phase} className="relative">
              <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
                {phase}
              </button>
              {openDropdown == phase && (
                <div className="absolute mt-2 w-30 bg-white text-black rounded shadow-lg z-10">
                  {challenges[phase]?.map((challenge) => (
                    <NavLink
                      key={challenge}
                      to={`/${phase.toLowerCase()}-${challenge}`}
                      className={({ isActive }) =>
                        `block px-4 py-2 ${
                          isActive
                            ? "bg-blue-500 text-white"
                            : "hover:bg-gray-200"
                        }`
                      }
                    >
                      {" "}
                      {challenge.replace("challenge", "Challenge ")}
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
