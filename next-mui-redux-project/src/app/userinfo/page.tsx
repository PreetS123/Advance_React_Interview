"use client";

import Link from "next/link";
import UserList from "../components/UserList";
import { Button } from "@mui/material";

const UserInfo = () => {
  return (
    <>
      <Button href={"/"} variant="outlined">
        Go back
      </Button>
      <UserList />
    </>
  );
};

export default UserInfo;
