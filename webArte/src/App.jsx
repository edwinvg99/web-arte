import "./App.css";
import {Routes, Route, Navigate } from "react-router-dom";

import Layaut from "./components/layaut";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Artistas from "./pages/artistas";
import Inicio from "./pages/inicio";
import Register from "./pages/register";
import Login from "./pages/login";
import Error404 from "./pages/error404";

export default function App() {
  return (
    <div className=" bg-primary min-h-screen">
      <NavBar></NavBar>
      <Layaut>
          <Routes>
            <Route path='/' element={<Inicio></Inicio>}></Route>
            <Route path='/artistas' element={<Artistas></Artistas>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/error404' element={<Error404 />} /> 

            <Route path='*' element={<Navigate to='/error404'/>} />
          </Routes>
      </Layaut>
      <Footer></Footer>
      
      
    </div>
  );
}
