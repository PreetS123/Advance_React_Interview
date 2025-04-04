"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../reduxStore";
import { Box, Button, TextField } from "@mui/material";
import { addTodo } from "../reduxStore/todoSllice";

const TodoInput = () => {
  const [inputText, setInputText] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    if (
      inputText.trim() !== "" ||
      inputText !== undefined ||
      inputText !== null
    ) {
      dispatch(addTodo(inputText));
    }
  };

  return (
    <Box display={"flex"} gap={2} mb={2}>
      <TextField
        label="Add todo"
        variant="outlined"
        value={inputText}
        onChange={(e) => {
          if (e.target.value.trim() != "") {
            setInputText(e.target.value);
          }
        }}
        fullWidth
      />
      <Button variant={"contained"} onClick={handleClick}>
        Add
      </Button>
    </Box>
  );
};

export default TodoInput;
