import './App.css';
import {Route, Routes} from "react-router";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"

function App() {
  return (
    <Routes>
      <Route path ='/' element={<Login />} />
      <Route path ='/Signup' element={<Signup />} />
      <Route path ='/Home' element={<Home />} />
    </Routes>
  );
}

export default App;
