import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../store";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert
} from "@mui/material";

const EmployeeForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name || !role) {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await axios.post("/api/employees", { name, role });
      dispatch(addEmployee(response.data.employee));

      // Clear inputs
      setName("");
      setRole("");
      setError(""); // Clear any previous errors
    } catch (error) {
      console.error("Error adding employee:", error);
      setError("Failed to add employee.");
    }
  };

  const handleClose = () => {
    setError("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        space: 2,
        padding: 3,
        margin: "auto",
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 3,
        width: "50%",
        marginTop:"20px"
      }}
    >
      <Typography variant="h5" gutterBottom>
        Add Employee
      </Typography>
      {error && (
        <Snackbar open={Boolean(error)} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {error}
          </Alert>
        </Snackbar>
      )}
      <div className="flex justify-between">

      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Name"
        variant="outlined"
        margin="normal"
        required
        sx={{ marginTop: 2, height: 36 }}
      />

      <TextField
        value={role}
        onChange={(e) => setRole(e.target.value)}
        label="Role"
        variant="outlined"
        margin="normal"
        required
        sx={{ marginTop: 2, height: 36 }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
       sx={{ marginTop: 2, height: 56 }}
      >
        Add Employee
      </Button>
      </div>
    </Box>
  );
};

export default EmployeeForm;
