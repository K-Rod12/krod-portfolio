import "aos/dist/aos.css";
import React, { useState, useRef, useEffect } from "react";
import memoji from "../assets/Memoji.png";
import styled from "styled-components";

const StyleHome = styled.section`
  h1 {
    margin: 0 0 10px 0px;
    color: var(--blue);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }
`;

const Home = () => {
  return (
    <StyleHome>
      <div
        data-aos="fade-right"
        style={{
          flex: 1.2,
          // backgroundColor: "green",
          padding: "2em 2em",
          margin: "0em 3em",
          // marginBottom: 100,
          justifyContent: "center",
        }}
      >
        <h1
          className="typed-text"
          style={{ fontSize: 25, color: "var(--blue)", maxWidth: "450px" }}
        >
          Hi there! 👋🏽 My Name is
        </h1>
        <h2 style={{ fontSize: 60 }} className="white-text">
          Kenley Rodriguez
        </h2>
        <p
          style={{ marginTop: 20, color: "#8892B0", fontSize: 18 }}
          className="white-text"
        >
          I am a full-stack Software Engineer with a passion for building
          scalable and user-friendly web applications. I am currently working as
          a backend developer at {""}
          <a
            style={{ color: "orange" }}
            href="https://www.discover.com/company/our-company/"
          >
            Discover Financial Services
          </a>
        </p>
      </div>

      <div
        data-aos="fade-left"
        className="hiddenRight"
        style={{
          flex: 1,
          // margin: "0em 5em",
          textAlign: "center",
          // margin: "auto",
        }}
      >
        <img
          style={{
            width: "300px",
            height: "300px",
            backgroundPosition: "center",
          }}
          src={memoji}
          className="App-logo"
          alt="profile"
        />
      </div>
    </StyleHome>
  );
};

export default Home;
