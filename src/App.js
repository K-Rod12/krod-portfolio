import React, { useState } from "react";
import "./App.css";
// import { Text } from React
import pic1 from "./assets/RecipeScreenshot.webp";
import profile from "./assets/RODRIGUEZ_KENLEY.jpg";
import About from "./components/About";
import { Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="Container">
      <header className="App-header">
        <img src={profile} style={{}} className="App-logo" alt="logo" />
        <nav>
          <button onClick={() => handlePageChange("about")}>About</button>
          <button onClick={() => handlePageChange("projects")}>Projects</button>
          <button onClick={() => handlePageChange("contact")}>Contact</button>
        </nav>

        <div>
          <Button>This is a button</Button>
          <h2>hello</h2>
        </div>
      </header>
      {/* <header style={{ display: "flex", justifyContent: "center" }}>
        <nav>
          <button
            onClick={() => handlePageChange("about")}
            style={{ padding: "10px", cursor: "pointer" }}
          >
            About
          </button>
          <button
            onClick={() => handlePageChange("projects")}
            style={{ padding: "10px", cursor: "pointer" }}
          >
            Projects
          </button>
          <button
            onClick={() => handlePageChange("contact")}
            style={{ padding: "10px", cursor: "pointer" }}
          >
            Contact
          </button>
        </nav>
      </header> */}

        
      <main className="Main">
        {currentPage === "about" && (
            <Carousel style={{height: '100%'}}>
              <Carousel.Item >
                <img
                  style={{height: '50vh', marginBottom: 100}}
                  src={profile}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              {/* <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item> */}
            </Carousel>
        )}

        {currentPage === "projects" && (
          <section>
            <h2>Projects</h2>
            <ul>
              <li>Project 1</li>
              <li>Project 2</li>
              <li>Project 3</li>
            </ul>
          </section>
        )}

        {currentPage === "contact" && (
          <section>
            <h2>Contact</h2>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>

              <button type="submit">Submit</button>
            </form>
          </section>
        )}
      </main>

      <footer className="Test">
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;

// // import { Text } from React
// import logo from './logo.svg';
// import profile from './assets/RODRIGUEZ_KENLEY.jpg';
// import './App.css';
// import About from './components/About';
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'

// import {Button, Container, Row, Col, Alert, Breadcrumb} from 'react-bootstrap'
// import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

// function App() {
//   return (

//     <div>
//       <header style={{}} className="App-header">
//         <img src={profile} style={{}}className="App-logo" alt="logo" />

//         <div style={{
//           }}
//           className='Test'
//         >
//           <p style={{}}>
//             Portfolio
//           </p>
//         </div>
//       </header>

//       <About/>

//       <div className="Test2">

//         <div>
//           <img src={profile} style={{}}className="App-logo"/>

//           <p>
//             Hello
//           </p>
//         </div>

//         <h1 style={{}}>
//           What's up
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default App;
