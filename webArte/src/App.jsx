import "./App.css";
import {Routes, Route } from "react-router-dom";

import Layaut from "./components/layaut";
import NavBar from "./components/navBar";
import Bloques from "./components/bloques";
import Footer from "./components/footer";

import Artistas from "./pages/artistas";
import Inicio from "./pages/inicio";
import Register from "./pages/register";
import Login from "./pages/login";

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
          </Routes>
          
      </Layaut>
      <Bloques></Bloques>
      <Footer></Footer>
      
      
    </div>
  );
}
