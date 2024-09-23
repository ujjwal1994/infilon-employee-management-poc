import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEmployee, deleteEmployee } from "../store";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const EmployeeItem = ({ employee }: { employee: { id: number; name: string; role: string } }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(employee.name);
  const [role, setRole] = useState(employee.role);

  const handleUpdate = async () => {
    const response = await axios.put(`/api/employees/${employee.id}`, { name, role });
    dispatch(updateEmployee(response.data.employee));
    setEditing(false);
  };

  const handleDelete = async () => {
    await axios.delete(`/api/employees/${employee.id}`);
    dispatch(deleteEmployee(employee.id));
  };

  return (
    <Box className="w-full">
      {editing ? (
        <Box
          className="flex flex-col space-y-4 p-6 max-w-md mx-auto bg-white rounded-lg shadow-md"
        >
          <Typography variant="h6" className="text-gray-700">Edit Employee</Typography>
          
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Employee Name"
            variant="outlined"
            fullWidth
            required
          />
          
          <TextField
            value={role}
            onChange={(e) => setRole(e.target.value)}
            label="Employee Role"
            variant="outlined"
            fullWidth
            required
          />
          
          <Box className="flex justify-end space-x-2">
            <Button
              onClick={handleUpdate}
              variant="contained"
              color="primary"
            >
              Save
            </Button>
            
            <Button
              onClick={() => setEditing(false)}
              variant="outlined"
              color="secondary"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      ) : (
        <Box className="flex justify-between w-[80%] md:w-[50%] my-4 mx-auto">
          <Typography className="font-semibold">{employee.name} - {employee.role}</Typography>
          <Box>
            <Button 
              onClick={() => setEditing(true)} 
              variant="contained" 
              color="success" 
              sx={{ mr: 2 }}
            >
              Edit
            </Button>
            <Button 
              onClick={handleDelete} 
              variant="contained" 
              color="error"
            >
              Delete
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default EmployeeItem;
