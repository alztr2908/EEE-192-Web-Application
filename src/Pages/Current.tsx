import Sensor from "../components/Sensor";
import Fields from "../components/Fields";
import { useState, useEffect } from "react";

// URL of API
const light_API =
  " https://api.thingspeak.com/channels/2206893/feeds.json?results=2";
const CO2_TVOC_API =
  "https://api.thingspeak.com/channels/2207047/feeds.json?api_key=M6GPF3WQCDNT4VDQ&results=2";
// const light_API = "";

function Current() {
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

  function displayData(name: string) {
    if ("Light" == name) {
      return (
        <>
          <Fields
            typeOfSensor="Light Intensity"
            unit="lux"
            apiData={light_API}
            fieldCount={2}
            startingField={1}
          />
        </>
      );
    } else if ("CO2" == name) {
      return (
        <>
          <div className="d-flex justify-content-center">
            <h2 style={{ fontSize: "1.5rem" }}>{name} Sensor</h2>
          </div>
        </>
      );
    } else if ("TVOC" == name) {
      return (
        <>
          <Fields
            typeOfSensor="TVOC"
            unit="ppb"
            apiData={CO2_TVOC_API}
            fieldCount={2}
            startingField={5}
          />
        </>
      );
    } else if ("GAA" == name) {
      return (
        <>
          <div className="d-flex justify-content-center">
            <h2 style={{ fontSize: "1.5rem" }}>{name} Sensor</h2>
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div className="btn-group">
        <button
          className={`btn btn-primary`}
          onClick={() => colorButton("Light")}
        >
          Light
        </button>
        <button
          className={`btn btn-primary`}
          onClick={() => colorButton("CO2")}
        >
          CO2
        </button>
        <button
          className={`btn btn-primary`}
          onClick={() => colorButton("TVOC")}
        >
          TVOC
        </button>
        <button
          className={`btn btn-primary`}
          onClick={() => colorButton("GAA")}
        >
          GAA
        </button>
      </div>

      {/* Main display */}
      {displayData(activeButton)}
    </>
  );
}

export default Current;
