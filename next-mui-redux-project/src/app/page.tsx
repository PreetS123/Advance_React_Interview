"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box mt={5}>
      <Typography>
        Welcome to nextJS and Redux toolkit along with MUI
      </Typography>
      <Stack gap={2}>
        <Link href={"/todoApp"}>
          <Button variant="contained"> My Todo List</Button>
        </Link>
        <Link href={"/userInfo"}>
          <Button variant="contained"> Go to user List</Button>
        </Link>
        <Link href={"/myForm"}>
          <Button variant="contained"> Go to Form List</Button>
        </Link>
      </Stack>
    </Box>
  );
}
