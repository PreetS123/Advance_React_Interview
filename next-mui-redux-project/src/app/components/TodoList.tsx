"use client";

import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../reduxStore";
import { Add, DeleteOutline, PlusOne, Remove } from "@mui/icons-material";
import { deleteTodo } from "../reduxStore/todoSllice";
import {
  decrementCounter,
  incrementByAmount,
  incrementCounter,
} from "../reduxStore/counterSlice";

export const TodoList = () => {
  const todos = useSelector((store: RootState) => store.todos);
  const counter: any = useSelector((store: RootState) => store.counter);
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete=(id:number)=>{
    dispatch(deleteTodo(id))
  }
  return (
    <List>
      {todos?.map((todo) => (
        <ListItem
          key={todo.id}
          secondaryAction={
            <IconButton edge="end" sx={{_hover:{background:'transparent'}}}>
              <Box sx={{ width: 100 }} display={"flex"} gap={2}>
                <DeleteOutline onClick={()=>handleDelete(Number(todo.id))} />

                <Add onClick={() => dispatch(incrementCounter())} />
                <input
                  type="number"
                  onChange={(e) => {
                    if (e.target.value.trim() != "") {
                      dispatch(incrementByAmount(Number(e.target.value)));
                    }

                  }}
                />
                <Remove onClick={() => dispatch(decrementCounter())} />
              </Box>
            </IconButton>
          }
        >
          <ListItemText primary={todo.text} />
          <ListItemText primary={counter.value} />
        </ListItem>
      ))}
    </List>
  );
};
