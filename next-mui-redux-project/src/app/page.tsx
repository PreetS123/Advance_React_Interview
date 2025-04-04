"use client";
import { Box, Typography } from "@mui/material";
import TodoInput from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

export default function Home() {
  return (
    <Box mt={5}>
       <Typography variant="h5" mb={2}>My Todo List</Typography>
       <TodoInput/>
       <TodoList/>
    </Box>
  );
}
