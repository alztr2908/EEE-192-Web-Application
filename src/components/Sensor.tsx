import { useState, useEffect } from "react";

interface Props {
  typeOfSensor: string;
  unit: string;
  apiData: string;
}

function Sensors({ typeOfSensor, unit, apiData }: Props) {
  const [data, setData] = useState([]);
  const [level, setLevel] = useState(-1);

  // UseEffect for handling the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiData);
        const data = await response.json();
        console.log(data);
        setData(data.feeds);
        setLevel(data.feeds[data.feeds.length - 1].field1);
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

  // Set type of each key in API
  interface Data {
    created_at: string;
    entry_id: number;
    field1: number;
    field2: number;
    field3: number;
    field4: number;
  }

  function displayData() {
    return (
      <>
        <div className="col-sm-4" style={{ borderRight: "1px solid black" }}>
          {data.map((value: Data, index, arr) => {
            if (arr.length - 1 === index) {
              return (
                <>
                  <h1
                    className="text-center pt-4"
                    style={{ fontSize: "4rem" }}
                    key={value.field1}
                  >
                    {value.field1} {unit}
                  </h1>
                  <p
                    className="text-center pt-4"
                    style={{ fontSize: "1rem" }}
                    key={value.created_at}
                  >
                    Created At: {value.created_at}
                  </p>
                  <p
                    className="text-center"
                    style={{ fontSize: "1rem" }}
                    key={value.entry_id - 1}
                  >
                    Value ID: {value.entry_id}
                  </p>
                </>
              );
            }
          })}
        </div>
        <div className="col-sm-8">
          <h1 className="text-center pt-4" style={{ fontSize: "4rem" }}>
            LEVEL {level}
          </h1>
          <p className="text-justified mx-4 pt-1" style={{ fontSize: "1rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            aliquet massa vel porttitor dapibus. Vivamus ultricies pretium
            efficitur. Maecenas imperdiet tristique est. Sed varius ligula
            varius pulvinar consectetur. Proin et metus condimentum felis
            maximus sollicitudin. Integer et maximus mauris.
          </p>
        </div>
      </>
    );
  }

  function displayNull() {
    return <h1 className="text-center">No sensor was found</h1>;
  }

  function changeBgColor(level: number) {
    if (level == 1) {
      return "primary";
    } else if (level == 2) {
      return "success";
    } else if (level == 3) {
      return "warning";
    } else if (level == 4) {
      return "danger";
    } else if (level == 5) {
      return "secondary";
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <h2 style={{ fontSize: "1.5rem" }}>{typeOfSensor} Sensor</h2>
      </div>
      <div
        className={`d-flex justify-content-center border border-primary-subtle rounded-3 bg-${changeBgColor(
          level
        )}`}
        style={{ margin: "0 15%" }}
      >
        {/* Main logic of the data */}
        {data.length > 0 ? displayData() : displayNull()}
      </div>
    </>
  );
}

export default Sensors;
