import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import pic1 from "./assets/RecipeScreenshot.webp";
import profile from "./assets/RODRIGUEZ_KENLEY.jpg";
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

  const handleTextSlide = (index) => {
    if (textSlide) {
      setTextSlide(0);
    } else {
      setTextSlide(1);
    }
  };

  // const handleScroll = (event) => {
  //   console.log(window.scrollY);
  //   console.log(scrollY);
  //   if (window.scrollY > scrollY && scrollY ) {
  //     setShowImage(1);
  //   } else {
  //     setShowImage(0);
  //   }

  //   setSetScrollX(window.scrollY / 2)
  //   setSetScrollY(- window.scrollY / 2)
  // };

  useEffect(() => {
    // setTextSlide(0);
    // handleTextSlide();
  }, []);

  return (
    <div className="Container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
          }}
        >
          <div
            style={{
              // transform: textSlide
              //   ? `translate(5%, 5%)`
              //   : "translate(0, 0) scale(1)",
              // transition: "transform 1.0s ease-in",
              width: "50%",
              padding: "8rem",
              alignContent: "center",
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <h1>Hi!<br/> My name is Kenley Rodriuez</h1>
            <div style={{ alignContent: 'center', alignItems: 'center', textAlign:'center', width: 300, }}>
              <h2 style={{alignContent: 'center', fontWeight: 'bold', backgroundColor: 'yellow'}}>Software Engineer</h2>
            </div>
            <p>
              I'm a full-stack developer with a passion for building scalable
              and user-friendly web applications. I have experience using
              technologies such as React.js, Node.js, and MongoDB.
            </p>
          </div>
          <img
            style={{
              width: "50%",
              height: "100%",
              backgroundImage: "url(./image.jpg)",
              backgroundPosition: "center",
            }}
            src={profile}
            className="App-logo"
            alt="profile"
          />
        </div>
      </div>

      <main className="Main" ref={(el) => (sectionsRef.current[0] = el)}>
        <h2
          style={{ margin: "0 0 20px 0", fontWeight: "bold", color: "white" }}
        >
          Projects
        </h2>

        {/* {currentPage === "about" && (
          <div style={{ paddingRight: 100, paddingLeft: 100 }}>
            <Carousel style={{ padding: 10 }}>
              <Carousel.Item>
                <img
                  style={{ height: "90vh", paddingBottom: 100 }}
                  src={pic1}
                  alt="profile"
                />
                <Carousel.Caption>
                  <h3>MeChef</h3>
                  <p>
                    Application that uses recipe api to return dishes related to
                    the ingredients that you have in your pantry
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img style={{ height: "90vh" }} src={profile} alt="profile" />
                <Carousel.Caption>
                  <h3>About Me</h3>
                  <p>A little about myself</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        )} */}

        {currentPage === "projects" && (
          <section className="Projects-section">
            <h2>Projects</h2>
            <ul>
              <li>Project 1</li>
              <li>Project 2</li>
              <li>Project 3</li>
            </ul>
          </section>
        )}

        {currentPage === "contact" && (
          <section className="Contact-section">
            <h2>Contact</h2>
            <form className="Contact-form">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>

              <button type="submit" className="Submit-button">
                Submit
              </button>
            </form>
          </section>
        )}
      </main>

      <Sidebar handleClick={handleMultipleClick} />
    </div>
  );
}
export default App;
