import React, { useState, useRef, useEffect } from "react";
import "./styles/App.css";
import GlobalStyle  from "./styles/GlobalStyle";
import profile from "./assets/RODRIGUEZ_KENLEY.jpg";
import memoji from "./assets/Memoji.png";
import Home from "./components/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import TopNav from "./components/Navbar";
import { Button, Carousel } from "react-bootstrap";
import Website  from "./components/Website";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentPage, setCurrentPage] = useState("about");
  const [showImage, setShowImage] = useState(0);
  const [textSlide, setTextSlide] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef([]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleClick = (index) => {
    setCurrentSection(index);
    const sectionElement = sectionsRef.current[index];
    sectionElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      transition: "1.0s",
    });
  };

  const handleMultipleClick = (index) => {
    handleClick(index);
  };

  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     console.log(entry);
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("show");
  //     } else {
  //       entry.target.classList.remove("show");
  //     }
  //   });
  // });

  // const hiddenLeftElements = document.querySelectorAll(".hiddenLeft");
  // const hiddenRightElements = document.querySelectorAll(".hiddenRight");

  // hiddenLeftElements.forEach((el) => observer.observe(el));
  // hiddenRightElements.forEach((el) => observer.observe(el));

  useEffect(() => {
    document.body.style.backgroundColor = "#0E192D";
    Aos.init({ duration: 2000 });
    // document.body.style.overscrollBehaviorY = 'contain';
    // document.documentElement.style.overflowY = 'scroll';
    // setTextSlide(0);
    // handleTextSlide();
  }, []);

  return (
    <body>
      <div className="Container">

        <GlobalStyle/>

        <TopNav/>

        <Home/>


        <section ref={(el) => (sectionsRef.current[1] = el)}>
          <div>
            <h1 className="white-text">Hello</h1>
          </div>
        </section>
        {/* <section></section> */}

        <Website handleClick={handleMultipleClick} />
      </div>
    </body>
  );
}
export default App;
