'use client';

import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../reduxStore";
import { DeleteOutline } from "@mui/icons-material";
import { deleteTodo } from "../reduxStore/todoSllice";

export const TodoList = () => {
    const todos= useSelector((store:RootState)=>store.todos);
    const dispatch= useDispatch<AppDispatch>();
  return (
    <List>
            {
            todos?.map((todo)=>(
                <ListItem key={todo.id}  secondaryAction={
                    <IconButton edge='end' onClick={()=>dispatch(deleteTodo(todo.id))}>
                        <DeleteOutline/>
                    </IconButton>
                }>
                    <ListItemText primary={todo.text}/>
                </ListItem>
            ))
             }
    </List>
  )
}
