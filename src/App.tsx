import { useState } from 'react'
import './App.css'
import EmployeeList from './EmployeeList'
import EmployeeForm from './EmployeeForm'

function App() {
  return (
    <>
      <div className='bg-[#fffbfb]'>
     <h2 className='font-bold text-[20px] text-center'>Employee Table</h2>
      <EmployeeForm />
      <EmployeeList />
      </div>
 
    </>
  )
}

export default App
