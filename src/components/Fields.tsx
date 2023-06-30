import { useState, useEffect } from "react";

interface Props {
  typeOfSensor: string;
  unit: string;
  apiData: string;
  fieldCount: number;
  startingField: number;
}

function Fields({
  typeOfSensor,
  unit,
  apiData,
  fieldCount,
  startingField,
}: Props) {
  const [data, setData] = useState([]);
  const [currData, setCurrData] = useState([]);
  const [pastData, setPastData] = useState([]);

  // UseEffect for handling the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiData);
        const data_json = await response.json();
        setData(data_json);
        setCurrData(data_json.feeds[1]);
        setPastData(data_json.feeds[0]);
        console.log(data_json);
        // setLevel(data.feeds[data.feeds.length - 1].field1);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();

    // const interval = setInterval(fetchData, 16000);

    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  const buildGrid = () => {
    return renderRows();
  };

  //Returns For example, we can have a row with 2 columns inside it.
  const renderRows = () => {
    let rows = [];

    let j = startingField;

    for (let row = 0; row < fieldCount; row++) {
      rows.push(<div className="row">{renderCols(j)}</div>);

      j += 2;
    }

    return rows;
  };

  //Returns an array of columns with the children inside.
  const renderCols = (row) => {
    let cols = [];

    /*
    created at
    entry_id
    field1: Lux Ave 
    field2: Lux Level
    field3: Max_Lux
    field4: Max_Lux_Level
    */

    //If you want to add more bootstrap breakpoints you can pass them as props here.
    for (let col = 0; col < 2; col++) {
      if (col == 0) {
        cols.push(
          <div className="col-md border border-primary-subtle rounded-3">
            <h2 className="text-center">Current</h2>
            <h2 className="text-center">{currData[`field${row}`]}</h2>
          </div>
        );
      } else {
        cols.push(
          <div className="col-md border border-primary-subtle rounded-3">
            <h2 className="text-center">Before</h2>
          </div>
        );
      }
    }
    return cols;
  };

  const displayNull = () => {
    return <h1 className="text-center">No sensor was found</h1>;
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <h2 style={{ fontSize: "1.5rem" }}>{typeOfSensor} Sensor</h2>
      </div>
      <div
        className={`border border-primary-subtle rounded-3`}
        style={{ margin: "0 5%" }}
      >
        {/* Main logic of the data */}
        {data != null ? buildGrid() : displayNull()}
      </div>
    </>
  );
}

export default Fields;
