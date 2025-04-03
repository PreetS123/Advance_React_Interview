// Challenge 1: Avoid Unnecessary Re-renders
// Objective
// Create a React app that displays a list of users.
// Optimize performance using React.memo, useCallback, and useMemo.
// Ensure only required components update when adding a new user.

import { useState } from "react";
import P1C1UserList from "../../component/P1C1UserList";
import CustomModal from "../../component/CustomModal";

// 🛠️ Steps to Implement
// Create a UserList component that takes a list of users and displays them.
// Optimize rendering using React.memo to prevent unnecessary re-renders.
// Use useCallback to pass stable functions to child components.
// Use useMemo to optimize expensive calculations (if needed).

// 📌 Expected Behavior
// ✅ Only new users should trigger re-render, not the entire list.
// ✅ The "Add User" button should update only necessary components.
// ✅ The app should use React.memo, useCallback, and useMemo.

export const Challenge1 = () => {
  const [isUserModal, setIsUserModal] = useState(false);
  const [user, setUser] = useState([
    {
      id: 1,
      name: "Preeti",
    },
    {
      id: 2,
      name: "Neha",
    },
  ]);
  const addUserList = () => {};
  return (
    <>
      <div className="flex flex-col gap-3 mx-auto w-[80%] h-screen bg-white border-1 border-gray-700 p-4">
        <div className="flex justify-between align-middle ">
          <h1>Add User list</h1>
          <button className="h-10 w-30 border-1 border-gray-500 rounded-md text-indigo-950 cursor-pointer hover:bg-gray-50" onClick={()=>setIsUserModal(true)}>Add User</button>
        </div>
        <div className="">
          <P1C1UserList users={user} />
        </div>
      </div>
      <CustomModal isOpen={isUserModal} onClose={() => setIsUserModal(false)} title="Add Users">
      {/* <p>This is a sample modal using Tailwind CSS.</p> */}
      <div className="w-full p-2 flex flex-col gap-2 mb-2">
      <input type="text" className="border-1 border-gray-400 rounded-sm w-full h-10 p-1 px-2" placeholder="Add username"/>
      </div>
      <div className="border-t-1 border-gray-200 flex flex-row justify-end items-center gap-3 py-1">
      <button className="h-8 w-15 self-end rounded-xl border-1 border-red-950 bg-red-800 text-red-50" onClick={() => setIsUserModal(false)}>Cancel</button>
      <button className="h-8 w-15 self-end rounded-xl border-1 border-green-400 bg-green-200 text-green-50">Add</button>
      </div>
      </CustomModal>
    </>
  );
};
