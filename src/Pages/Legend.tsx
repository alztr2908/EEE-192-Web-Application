import { useState, useEffect } from "react";

function Legend() {
  // helpers
  const [activeButton, setActiveButton] = useState("Light");

  function colorButton(name: string) {
    if ("Light" == name) {
      setActiveButton("Light");
    } else if ("CO2" == name) {
      setActiveButton("CO2");
    } else if ("TVOC" == name) {
      setActiveButton("TVOC");
    } else if ("GAA" == name) {
      setActiveButton("GAA");
    }

    return "";
  }

  function displayLight() {
    return (
      <>
        <div
          className="col-md border border-primary-subtle rounded-3 "
          style={{ fontSize: "2rem" }}
        >
          <h2 className="text-center">Light Sensor level equivalent</h2>
          <h3 className="text-center">Level 0: 0 - 100 lux (Dim)</h3>
          <h3 className="text-center">Level 1: 101 - 500 lux (Bright) </h3>
          <h3 className="text-center">
            Level 1: 501 - 10000 lux (Indirect Sunlight){" "}
          </h3>
          <h3 className="text-center">
            Level 2: Beyond 10001 lux (Direct Sunlight)
          </h3>
        </div>
      </>
    );
  }
  function displayCo2() {
    return (
      <>
        <div
          className="col-md border border-primary-subtle rounded-3 "
          style={{ fontSize: "2rem" }}
        >
          <h2 className="text-center">CO2 Sensor level equivalent</h2>
          <h3 className="text-center">Level 0: 400 - 1000 lux (Optimal)</h3>
          <h3 className="text-center">
            Level 1: Beyond 1000 ppm (Good for plants but bad for others)
          </h3>
        </div>
      </>
    );
  }
  function displayTVOC() {
    return (
      <>
        <div
          className="col-md border border-primary-subtle rounded-3 "
          style={{ fontSize: "2rem" }}
        >
          <h2 className="text-center">TVOC Sensor level equivalent</h2>
          <h3 className="text-center">Level 0: 0 - 220 ppb (optimal)</h3>
          <h3 className="text-center">Level 1: 221 - 660 lux (moderate) </h3>
          <h3 className="text-center">Level 2: 661 - 1430 lux (High) </h3>
          <h3 className="text-center">Level 3: Beyond 1431 ppm (Very High)</h3>
        </div>
      </>
    );
  }
  function displayGAA() {
    return (
      <>
        <div
          className="col-md border border-primary-subtle rounded-3 "
          style={{ fontSize: "2rem" }}
        >
          <h2 className="text-center">GAA Sensor level equivalent</h2>
          <h3 className="text-center">
            X, Y, Z: Previous reading +- 0.01 (not moving)
          </h3>
        </div>
      </>
    );
  }

  function displayData(buttonName: string) {
    if (buttonName == "Light") {
      return displayLight();
    } else if (buttonName == "CO2") {
      return displayCo2();
    } else if (buttonName == "TVOC") {
      return displayTVOC();
    } else if (buttonName == "GAA") {
      return displayGAA();
    }
  }

  return (
    <>
      <div
        className="btn-group btn-group-lg my-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className={`btn btn-success `}
          onClick={() => colorButton("Light")}
        >
          Light
        </button>
        <button
          className={`btn btn-success `}
          onClick={() => colorButton("CO2")}
        >
          CO2
        </button>
        <button
          className={`btn btn-success `}
          onClick={() => colorButton("TVOC")}
        >
          TVOC
        </button>
        <button
          className={`btn btn-success `}
          onClick={() => colorButton("GAA")}
        >
          GAA
        </button>
      </div>
      {displayData(activeButton)}
    </>
  );
}

export default Legend;
