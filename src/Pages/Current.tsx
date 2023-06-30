import Sensor from "../components/Sensor";
import Fields from "../components/Fields";
import { useState, useEffect } from "react";
import axios from "axios";
// URL of API
const light_API =
  " https://api.thingspeak.com/channels/2206893/feeds.json?results=2";
const CO2_TVOC_API =
  "https://api.thingspeak.com/channels/2207047/feeds.json?api_key=M6GPF3WQCDNT4VDQ&results=2";
// const GAA_API = "";

function Current() {
  const [activeButton, setActiveButton] = useState("TVOC");
  const [lightData, setLightData] = useState([]);
  const [co2Data, setCo2Data] = useState([]);

  useEffect(() => {
    // Function to fetch data from API 1
    const fetchDataFromAPI1 = async () => {
      try {
        const response = await axios.get(light_API);
        // Process the data from the response
        const processedData = response.data;
        // Update the state with the processed data
        setLightData(processedData);
      } catch (error) {
        console.error("Error fetching data from API 1:", error);
      }
    };

    // Function to fetch data from API 2
    const fetchDataFromAPI2 = async () => {
      try {
        const response = await axios.get(CO2_TVOC_API);
        // Process the data from the response
        const processedData = response.data;
        // Update the state with the processed data
        setCo2Data(processedData);
      } catch (error) {
        console.error("Error fetching data from API 2:", error);
      }
    };

    // Call the fetchDataFromAPIs function immediately
    fetchDataFromAPI1();
    fetchDataFromAPI2();

    // Set up the interval to fetch data periodically (every 5 seconds in this example)
    const intervalId = setInterval(() => {
      fetchDataFromAPI1();
      fetchDataFromAPI2();
    }, 16000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  console.log(lightData);
  console.log(co2Data);

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
            apiObject={lightData}
            fieldCount={2}
            startingField={1}
          />
        </>
      );
    } else if ("CO2" == name) {
      return (
        <>
          <Fields
            typeOfSensor="CO2"
            unit="ppm"
            apiObject={co2Data}
            fieldCount={2}
            startingField={1}
          />
        </>
      );
    } else if ("TVOC" == name) {
      return (
        <>
          <Fields
            typeOfSensor="TVOC"
            unit="ppb"
            apiObject={co2Data}
            fieldCount={2}
            startingField={5}
          />
        </>
      );
    } else if ("GAA" == name) {
      return (
        <>
          <Fields
            typeOfSensor="TVOC"
            unit="ppb"
            apiObject={co2Data}
            fieldCount={3}
            startingField={0}
          />
        </>
      );
    }
  }

  const displayNull = () => {
    return <h1 className="text-center">No sensor was found</h1>;
  };

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

      {/* Main display */}
      {lightData == null ? displayNull() : displayData(activeButton)}
    </>
  );
}

export default Current;
