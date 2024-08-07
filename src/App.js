import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter  ,Route, Routes } from 'react-router-dom';
import SimpleCalculator from './Pages/SimpleCalc';
import BMICalculator from './Pages/BmiCalc';
import DigiConverter from './Pages/DigitConverter';
import Home from './Pages/HomePage';
import DateWizard from './Pages/DateWizard';

function App() {
  return (
   <>    
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Navbar/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/simple' element={<SimpleCalculator/>}/>
    <Route path='/bmi' element={<BMICalculator/>}/>
    <Route path='/datewizard' element={<DateWizard/>}/>
    <Route path='/digitconvert' element={<DigiConverter/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
    
   </>
  );
}

export default App;
