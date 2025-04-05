import { Button, Stack, Typography } from "@mui/material";
import TodoInput from "../components/TodoInput";
import { TodoList } from "../components/TodoList";

const TodoApp = () => {
  return (
    <>
      <Stack my={4} display={'flex'} flexDirection={'row'} justifyContent={'space-around'} width={'50%'}>
        <Button href={'/'} variant="outlined">Go back</Button>
        <Typography variant="h5" mb={2}>
        My Todo List
      </Typography>
      </Stack>

      <TodoInput />
      <TodoList />
    </>
  );
};

export default TodoApp;
