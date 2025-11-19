import { use } from 'react';
import './App.css'
import { AuthContext } from './context/AuthContext';
import { Router } from 'react-router';

function App() {
   const { loading } = use(AuthContext);

  if (loading) {
    return <loading />; 
  }


  return (
    <>
      
       <Router />
      
    </>
  )
}

export default App
