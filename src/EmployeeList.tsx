import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees, RootState } from "../store";
import EmployeeItem from "./EmployeeItem";
import { setEmployees } from "../store";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const { employees } = useSelector((state: RootState) => state.employees);

useEffect(() => {
    const getEmployees = async () => {
      try {
        const employees = await fetchEmployees();
        dispatch(setEmployees(employees));
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    getEmployees();
  }, [dispatch]);

  return (
    <div className="p-4">
      {employees.map((employee) => (
        <EmployeeItem key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
