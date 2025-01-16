import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import { LogIn } from './components/LogIn';
import Deatils from './components/Deatils';
import Error from './components/Error';

function App() {
  
  return (
    <>
    <Header/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<LogIn/>}/> 
<Route path='/details' element={<Deatils/>}/> 
<Route path='/*' element={<Error/>}/> 


    </Routes>
    </>
  )
}

export default App
