import Fields from "../components/Fields";
import { useState, useEffect } from "react";
import axios from "axios";
// URL of API
const light_API =
  " https://api.thingspeak.com/channels/2206893/feeds.json?results=2";
const CO2_TVOC_API =
  "https://api.thingspeak.com/channels/2207047/feeds.json?api_key=M6GPF3WQCDNT4VDQ&results=2";
const GAA_API =
  "https://api.thingspeak.com/channels/2207920/feeds.json?results=2";

function Current() {
  // helpers
  const [activeButton, setActiveButton] = useState("Light");
  const [isLoading, setIsLoading] = useState(false);

  // API Data object
  const [lightData, setLightData] = useState(null);
  const [co2Data, setCo2Data] = useState(null);
  const [gaaData, setGaaData] = useState(null);

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

    // Function to fetch data from API 3
    const fetchDataFromAPI3 = async () => {
      try {
        const response = await axios.get(GAA_API);
        // Process the data from the response
        const processedData = response.data;
        // Update the state with the processed data
        setGaaData(processedData);
      } catch (error) {
        console.error("Error fetching data from API 3:", error);
      }
    };

    // Call the fetchDataFromAPIs function immediately
    fetchDataFromAPI1();
    fetchDataFromAPI2();
    fetchDataFromAPI3();

    // Load Elements when all data were fetched
    setIsLoading(false);

    // Set up the interval to fetch data periodically (every 5 seconds in this example)
    const intervalId = setInterval(() => {
      fetchDataFromAPI1();
      fetchDataFromAPI2();
      fetchDataFromAPI3();
    }, 20000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures that this effect runs only once

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
            // @ts-ignore
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
            // @ts-ignore
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
            // @ts-ignore
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
            typeOfSensor="Accelerometer"
            unit=""
            // @ts-ignore
            apiObject={gaaData}
            fieldCount={3}
            startingField={1}
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
      {isLoading ? displayNull() : displayData(activeButton)}
    </>
  );
}

export default Current;
