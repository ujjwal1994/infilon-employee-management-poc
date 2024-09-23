import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Employee {
  id: number;
  name: string;
  role: string;
} 

interface EmployeeState {
  employees: Employee[];
  loading: boolean;
}

const initialState: EmployeeState = {
  employees: [],
  loading: false,
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees(state, action: PayloadAction<Employee[]>) {
      state.employees = action.payload;
    },
    addEmployee(state, action: PayloadAction<Employee>) {
      state.employees.push(action.payload);
    },
    updateEmployee(state, action: PayloadAction<Employee>) {
      const index = state.employees.findIndex((e) => e.id === action.payload.id);
      if (index >= 0) state.employees[index] = action.payload;
    },
    deleteEmployee(state, action: PayloadAction<number>) {
      state.employees = state.employees.filter((e) => e.id !== action.payload);
    },
  },
});

export const { setEmployees, addEmployee, updateEmployee, deleteEmployee } = employeeSlice.actions;

export const fetchEmployees = async (): Promise<Employee[]> => {
  const response = await axios.get("/api/employees");
  return response.data.employees; // Return the array of employees
};

export const store = configureStore({
  reducer: {
    employees: employeeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
