import React from "react";
import { FaBeer } from "react-icons/fa";
import { VscFileCode } from "react-icons/vsc";
import { MdHome } from "react-icons/md";
import "aos/dist/aos.css";

function Website({ }) {

  const websites = ['https://www.linkedin.com/in/kenley-rod/', "https://github.com/K-Rod12"];

  return (
    <div
      data-aos="fade-left"
      style={{
        position: "fixed",
        top: "75%",
        left: "2%",
        borderRadius: 30,
        display: "flex",
        backgroundColor: "transparent",
        // backgroundColor: "white",
        flexDirection: "column",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      {websites.map((website, index) => (
        <button
          className="custom-button"
          key={website}
          style={{ margin: "1rem 0rem" }}
          onClick={() => window.location.href=website}
        >
          {index === 0 && (
            <svg
              href="www.google.com"
              width="50"
              height="50"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="var(--blue)"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
              />
            </svg>
          )}
          {index === 1 && (
            <svg
              width="50"
              height="50"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="var(--blue)"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
              />
            </svg>
          )}
          {index === 2 && (
            <svg
            width="50"
            height="50"
            viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="var(--blue)"
                d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
              />
            </svg>
          )}{" "}
          {/* {section} */}
        </button>
      ))}
    </div>
  );
}

export default Website;
