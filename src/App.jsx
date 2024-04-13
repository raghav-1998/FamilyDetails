import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstStepForm from './components/FirstStepForm';
import { useState } from 'react';
import SecondStepForm from './components/SecondStepForm';
import Details from './components/Details';

function App() {
  const [currentPage,setCurrentPage]=useState(1)
  const[formData,setFormData]=useState({})

  const handleFirstStepSubmit=(data)=>{
    setFormData({...formData,...data})
    setCurrentPage(2)
  }

  const handleSecondStepSubmit=(data)=>{
    setFormData({...formData,familyMembers:data.familyMembers})
    setCurrentPage(3)
    console.log(formData)
  }

  const handleGoToPreviousPage=()=>{
    setCurrentPage(currentPage-1)
  }


  return(
    <div>
      {
        currentPage===1 && (
          <FirstStepForm onNext={handleFirstStepSubmit}/>
        )
      }
      {
        currentPage===2 && (
          <SecondStepForm onPrevious={handleGoToPreviousPage} onSubmit={handleSecondStepSubmit}/>
        )
      }
      {
        currentPage===3 && (
          <Details onEdit={handleGoToPreviousPage} data={formData}/>
        )
      }
    </div>
  )
}

export default App
