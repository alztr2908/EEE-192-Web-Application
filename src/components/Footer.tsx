import React from "react";

function Footer() {
  return (
    <>
      <footer
        className="footer"
        style={{
          padding: "20px",
          textAlign: "center",
          position: "relative",
          bottom: "0",
          width: "100%",
          marginTop: "1em",
          backgroundColor: "#85ce2f",
        }}
      >
        <div className="container">
          <span className="text-muted">
            Created by Alzter Aquino as a requirement for EEE 192
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
