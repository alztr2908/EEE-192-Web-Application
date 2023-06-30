import React from "react";

function Overall() {
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
          src="https://thingspeak.com/channels/2176112/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=ADC&type=line"
        ></iframe>
        <iframe
          width="450"
          height="260"
          style={{ border: "1px solid #cccccc" }}
          src="https://thingspeak.com/channels/2176112/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Voltage&type=line"
        ></iframe>
      </div>
      <div className="d-flex justify-content-center">
        <h2 style={{ fontSize: "1.5rem" }}>CO2 Sensor</h2>
      </div>
      <div className="d-flex justify-content-around">
        <iframe
          width="450"
          height="260"
          style={{ border: "1px solid #cccccc" }}
          src="https://thingspeak.com/channels/2176112/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=ADC&type=line"
        ></iframe>
        <iframe
          width="450"
          height="260"
          style={{ border: "1px solid #cccccc" }}
          src="https://thingspeak.com/channels/2176112/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Voltage&type=line"
        ></iframe>
      </div>
      <div className="d-flex justify-content-center">
        <h2 style={{ fontSize: "1.5rem" }}>TVOC Sensor</h2>
      </div>
      <div className="d-flex justify-content-around">
        <iframe
          width="450"
          height="260"
          style={{ border: "1px solid #cccccc" }}
          src="https://thingspeak.com/channels/2176112/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=ADC&type=line"
        ></iframe>
        <iframe
          width="450"
          height="260"
          style={{ border: "1px solid #cccccc" }}
          src="https://thingspeak.com/channels/2176112/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Voltage&type=line"
        ></iframe>
      </div>
      <div className="d-flex justify-content-center">
        <h2 style={{ fontSize: "1.5rem" }}>
          Gyroscope and Accelerometer Sensor
        </h2>
      </div>
      <div className="d-flex justify-content-center">
        <iframe
          width="450"
          height="260"
          style={{ border: "1px solid #cccccc" }}
          src="https://thingspeak.com/channels/2176112/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=ADC&type=line"
        ></iframe>
      </div>
      <div className="d-flex justify-content-around">
        <iframe
          width="450"
          height="260"
          style={{ border: "1px solid #cccccc" }}
          src="https://thingspeak.com/channels/2176112/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Voltage&type=line"
        ></iframe>
        <iframe
          width="450"
          height="260"
          style={{ border: "1px solid #cccccc" }}
          src="https://thingspeak.com/channels/2176112/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Voltage&type=line"
        ></iframe>
      </div>
    </>
  );
}

export default Overall;
