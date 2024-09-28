import { useState } from 'react'
import './App.css'
import EmployeeList from './EmployeeList'
import EmployeeForm from './EmployeeForm'
import DineoutPage from './DineOut'

function App() {
  return (
    <>
      <div className='bg-[#fffbfb]'>
     {/* <h2 className='font-bold text-[20px] text-center'>Employee Table</h2>
      <EmployeeForm />
      <EmployeeList /> */}
      <DineoutPage />
      </div>
 
    </>
  )
}

export default App
