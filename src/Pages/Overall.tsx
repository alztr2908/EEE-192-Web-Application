import { useState, useEffect } from "react";

function Overall() {
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
        <div className="d-flex justify-content-center">
          <h2 style={{ fontSize: "1.5rem" }}>Light Sensor</h2>
        </div>
        <div className="d-flex justify-content-around">
          <iframe
            width="450"
            height="260"
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2206893/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=10&title=Average+Light+Intensity&type=line"
          ></iframe>
          <iframe
            width="450"
            height="260"
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2206893/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=3000&title=Level+equivalent+of+average+lux&type=line"
          ></iframe>
        </div>
        <div className="d-flex justify-content-around my-2">
          <iframe
            width="450"
            height="260"
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2206893/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line"
          ></iframe>
          <iframe
            width="450"
            height="260"
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2206893/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
          ></iframe>
        </div>
      </>
    );
  }
  function displayCo2() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <h2 style={{ fontSize: "1.5rem" }}>CO2 Sensor</h2>
        </div>
        <div className="d-flex justify-content-around mb-2">
          <iframe
            width="450"
            height="260"
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2207047/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=10&title=Average+CO2+per+reading&type=line"
          ></iframe>
          <iframe
            width="450"
            height="260"
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2207047/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Level+Equivalent+of+CO2+Ave&type=line"
          ></iframe>
        </div>
        <div className="d-flex justify-content-around">
          <iframe
            width="450"
            height="260"
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2207047/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Max+CO2+Value&type=line"
          ></iframe>
          <iframe
            width="450"
            height="260"
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2207047/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Level+Equivalent+of+Max+C02&type=line"
          ></iframe>
        </div>
      </>
    );
  }
  function displayTVOC() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <h2 style={{ fontSize: "1.5rem" }}>TVOC Sensor</h2>
        </div>
        <div className="d-flex justify-content-around mb-2">
          <iframe
            width="450"
            height="260"
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2207047/charts/5?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Average+TVOC+per+reading&type=line"
          ></iframe>
          <iframe
            width="450"
            height="260"
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2207047/charts/6?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Level+equivalent+of+average+CO2+per+reading&type=line"
          ></iframe>
        </div>
        <div className="d-flex justify-content-around">
          <iframe
            width="450"
            height="260"
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2207047/charts/7?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Max+TVOC+value+per+reading&type=line"
          ></iframe>
          <iframe
            width="450"
            height="260"
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2207047/charts/8?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Level+equivalent+of+max+TVOC&type=line"
          ></iframe>
        </div>
      </>
    );
  }
  function displayGAA() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <h2 style={{ fontSize: "1.5rem" }}>
            Gyroscope and Accelerometer Sensor
          </h2>
        </div>
        <div className="d-flex justify-content-around m-2">
          <iframe
            width="450"
            height="260"
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2207920/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=200&title=Ax&type=line"
          ></iframe>
          <iframe
            width="450"
            height="260"
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2207920/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=200&title=Ay&type=line"
          ></iframe>
        </div>
        <div className="d-flex justify-content-around">
          <iframe
            width="450"
            height="260"
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2207920/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=100&title=Az&type=line"
          ></iframe>
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

export default Overall;
