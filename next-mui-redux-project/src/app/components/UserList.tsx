"use client"
import {
    Alert,
    CircularProgress,
    List,
    ListItem,
    ListItemText,
    Typography,
  } from "@mui/material";
  import { useEffect } from "react";
import { fetchUsers } from "../reduxStore/userSlice";
import { AppDispatch, RootState } from "../reduxStore";
import { useDispatch, useSelector } from "react-redux";


const UserList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { users, loading, error } = useSelector(
      (state: RootState) => state.users
    );
  
    useEffect(()=>{
      dispatch(fetchUsers());
    },[dispatch])
  return (
    <>
      <Typography variant="h4" gutterBottom>
        User's list
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <List>
            {users?.map((el) => (
              <ListItem key={el.id}>
                <ListItemText primary={el.name} secondary={el.email} />
              </ListItem>
            ))}
          </List>
          {error && <Alert severity="error">{error} </Alert>}
        </>
      )}
    </>
  )
}

export default UserList