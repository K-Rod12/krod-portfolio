import React from "react";
import { FaBeer } from "react-icons/fa";
import { VscFileCode } from "react-icons/vsc";
import { MdHome } from "react-icons/md";
// import { IconName } from "react-icons/vsc";
function Sidebar({ handleClick, handleImageClick }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "45%",
        right: 20,
        borderRadius: 30,
        display: "flex",
        backgroundColor: "orange",
        // backgroundColor: "white",
        flexDirection: "column",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      {["Section 1", "Section 2", "Section 3"].map((section, index) => (
        <button
          className="custom-button"
          key={section}
          style={{ margin: "1rem 0rem" }}
          onClick={() => handleClick(index)}
        >
          {index === 0 && <MdHome color="white" size={40} />}
          {index === 1 && <VscFileCode color={"white"} size={40} />}
          {index === 2 && <VscFileCode size={40} />}
          {/* {section} */}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
