import "./App.css";
import { useEffect } from "react";
function App() {
  let menu;
  useEffect(() => {
    menu = document.getElementById("menu");
    Array.from(document.getElementsByClassName("menu-items"))
      .forEach((item,index) => {
        item.onmouseover = () =>{
          menu.dataset.activeIndex = index;
        }
      });

  }, []);
  return (
    <div id="menu">
      <div id="menu-items">
        <a href="/" className="menu-items">
          Home
        </a>
        <a href="/" className="menu-items">
          Shop
        </a>
        <a href="/" className="menu-items">
          About
        </a>
        <a href="/" className="menu-items">
          Contact Us
        </a>
      </div>
      <div id="menu-background-pattern"> </div>
      <div id="menu-background-image"> </div>
    </div>
  );
}

export default App;
