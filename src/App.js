import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import profile from "./assets/RODRIGUEZ_KENLEY.jpg";
import memoji from "./assets/Memoji.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button, Carousel } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
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

  const handleImageClick = () => {
    setShowImage(!showImage);
  };

  const handleMultipleClick = (index) => {
    handleClick(index);
    handleImageClick();
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
    document.body.style.backgroundColor = "black";
    Aos.init({ duration: 2000 });
    // document.body.style.overscrollBehaviorY = 'contain';
    // document.documentElement.style.overflowY = 'scroll';
    // setTextSlide(0);
    // handleTextSlide();
  }, []);

  return (
    <body>
      <div className="Container">
        <section>
            <div
              style={{
                padding: "5rem",
                display: "flex",
                height: "100%",
              }}
            >
              <div
                data-aos="fade-right"
                className="hiddenLeft"
                style={{
                  width: "50%",
                  padding: "8rem",
                  alignContent: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              >
                <h1 style={{ fontSize: 50 }} className="white-text">
                  Hi!
                  <br /> My name is Kenley Rodriuez
                </h1>
                <div
                  style={{
                    alignContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    width: 300,
                  }}
                >
                  <h2
                    style={{
                      alignContent: "center",
                      fontWeight: "bold",
                      backgroundColor: "orange",
                    }}
                  >
                    Software Engineer
                  </h2>
                </div>
                <p className="white-text">
                  I'm a full-stack developer with a passion for building
                  scalable and user-friendly web applications. I have experience
                  using technologies such as React.js, Node.js, and MongoDB.
                </p>
              </div>
              <div
                data-aos="fade-left"
                className="hiddenRight"
                style={{
                  width: "50%",
                  bottom: 10,
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                <img
                  style={{
                    // width: "50%",
                    // height: "100%",
                    backgroundPosition: "center",
                  }}
                  src={memoji}
                  className="App-logo"
                  alt="profile"
                />
              </div>
            </div>
        </section>

        <section>
          <div>
            <h1 className="white-text">Hello</h1>
          </div>
        </section>
        {/* <section></section> */}

        {/* <Sidebar handleClick={handleMultipleClick} /> */}
      </div>
    </body>
  );
}
export default App;
