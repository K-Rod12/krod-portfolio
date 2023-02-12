import React from "react";

function Sidebar({handleClick, handleImageClick}) {

  return (
    <div
      style={{
        position: "fixed",
        top: "45%",
        right: 20,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "white",
        padding: "1rem",
      }}
    >
      {["Section 1", "Section 2", "Section 3"].map((section, index) => (
        <button
          key={section}
          style={{ margin: "0 1rem" }}
          onClick={() => handleClick(index)}
        >
          {section}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
