import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '~/utils/types/calendar.types';

import DeleteIcon from '@mui/icons-material/Delete';
import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider,
    IconButton, List, ListItem, ListItemText, TextField
} from '@mui/material';

interface AddTodoModalProps {
  open: boolean;
  handleClose: Dispatch<SetStateAction<void>>;
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export default function AddTodoModal({
  open,
  handleClose,
  todos,
  setTodos,
}: AddTodoModalProps) {
  const [color, setColor] = useState("#b32aa9");
  const [title, setTitle] = useState("");

  const onAddTodo = useCallback(() => {
    setTitle("");
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        color,
        title,
      },
    ]);
  }, []);

  const onDeletetodo = useCallback(
    (id: string) => setTodos(todos.filter((todo) => todo.id !== id)),
    [],
  );

  const onClose = useCallback(() => handleClose(), []);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add todo</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Create todos to add to your Calendar.
        </DialogContentText>
        <Box>
          <TextField
            name="title"
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            sx={{ mb: 6 }}
            required
            variant="outlined"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <HexColorPicker color={color} onChange={setColor} />
            <Box
              sx={{ height: 80, width: 80, borderRadius: 1 }}
              className="value"
              style={{ backgroundColor: color }}
            ></Box>
          </Box>
          <Box>
            <List sx={{ marginTop: 3 }}>
              {todos.map((todo) => (
                <ListItem
                  key={todo.title}
                  secondaryAction={
                    <IconButton
                      onClick={() => onDeletetodo(todo.id)}
                      color="error"
                      edge="end"
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <Box
                    sx={{
                      height: 40,
                      width: 40,
                      borderRadius: 1,
                      marginRight: 1,
                    }}
                    className="value"
                    style={{ backgroundColor: todo.color }}
                  ></Box>
                  <ListItemText primary={todo.title} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </DialogContent>
      <Divider />
      <DialogActions sx={{ marginTop: 2 }}>
        <Button
          sx={{ marginRight: 2 }}
          variant="contained"
          color="error"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          onClick={() => onAddTodo()}
          disabled={title === "" || color === ""}
          sx={{ marginRight: 2 }}
          variant="contained"
          color="success"
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
