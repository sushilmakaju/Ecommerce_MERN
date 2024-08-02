import './App.css';
import Login_Form from './Component/Login/Logincomponent';
import Navbar from './Component/Nav/Navbar';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Signup from './Component/Signup/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/login' element={<Login_Form/>} />
      <Route path='/signup' element={<Signup/>} />

      </Routes>


    </Router>

  );
}

export default App;
