import { useState, useEffect } from "react";

interface Props {
  apiData: string;
}

function GAA({ apiData }: Props) {
  const [data, setData] = useState([]);
  const [field1, setField1] = useState(-1);

  //   UseEffect for handling the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiData);
        const data = await response.json();
        setData(data.feeds);
        setField1(data.feeds[data.feeds.length - 1].field1);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 16000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function displayData() {
    return (
      <>
        <div className="d-flex flex-column justify-content-center col-sm-4 border border-primary-subtle rounded-3">
          <h1 className="text-center">X: {field1}</h1>
        </div>
        <div className="col-sm-4 border border-primary-subtle rounded-3">
          <h1 className="text-center">Y: {field1}</h1>
        </div>
        <div className="col-sm-4 border border-primary-subtle rounded-3">
          <h1 className="text-center">Z: {field1}</h1>
        </div>
      </>
    );
  }

  function displayNull() {
    return (
      <>
        <h1 className="text-center">No sensor was found</h1>;
      </>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <h2 style={{ fontSize: "1.5rem" }}>
          Gyroscope and Accelerometer Sensor
        </h2>
      </div>
      <div
        className="d-flex justify-content-center border border-primary-subtle rounded-3"
        style={{ margin: "0 10%" }}
      >
        {/* Main logic of the data */}
        {data.length > 0 ? displayData() : displayNull()}
      </div>
    </>
  );
}

export default GAA;
