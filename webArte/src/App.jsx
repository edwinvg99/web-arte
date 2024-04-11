import "./App.css";
import Button from './components/button'
import Layaut from "./components/layaut";
import NavBar from "./components/navBar";
import Bloques from "./components/bloques";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className=" bg-primary min-h-screen">
      <NavBar></NavBar>
      <Layaut>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ullam consequatur sed, recusandae rerum cupiditate fugit explicabo eaque commodi mollitia reprehenderit debitis non dicta, earum necessitatibus enim eum voluptate qui.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus blanditiis quae, sunt nulla nihil impedit voluptatibus, saepe voluptas sapiente inventore, similique quo id aperiam corrupti molestiae eligendi labore. Quidem, obcaecati!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi sequi nemo cupiditate id sed inventore odio sapiente facilis recusandae! Harum minima autem repellendus nisi repellat obcaecati aut dolorum soluta?</p>
      </Layaut>
      <Bloques></Bloques>
      <Footer></Footer>
    </div>
  );
}
