import React, { useState, useRef, useEffect } from "react";
import "./App.css";
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

      <main className="Main" ref={(el) => (sectionsRef.current[1] = el)}>
        <h2
          style={{ margin: "0 0 20px 0", fontWeight: "bold", color: "white" }}
        >
          Projects
        </h2>

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
