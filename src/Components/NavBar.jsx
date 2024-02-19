import { useEffect, useState } from "react";

function NavBar() {
  const [classList, setClassList] = useState("container");
  console.log(window.screen.width);
  const [width, setWidth] = useState(window.innerWidth);
  const toggleClass = () => {
    console.log("asdsjd");
    if (classList.includes("change")) {
      setClassList("container");
    } else {
      setClassList("container change");
    }
    console.log("asdsjd");
    const menu =
      document.getElementById("menu") || document.getElementById("mobileMenu");
    if (menu.id == "mobileMenu") {
      menu.id = "menu";
    } else {
      menu.id = "mobileMenu";
    }
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <nav id="navbar">
        <div id="logo">LOGO</div>

        <div className={classList} onClick={toggleClass}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </nav>
      <div id="menu">
        <ul id="nav">
          <li>Home</li>
          <li>Page 1</li>
          <li>Page 2</li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
