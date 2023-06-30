import { useState, useEffect } from "react";

interface Props {
  typeOfSensor: string;
  unit: string;
  apiObject: Object;
  fieldCount: number;
  startingField: number;
}

function Fields({
  typeOfSensor,
  unit,
  apiObject,
  fieldCount,
  startingField,
}: Props) {
  const [data, setData] = useState([]);
  const [currData, setCurrData] = useState([]);
  const [pastData, setPastData] = useState([]);
  //   UseEffect for handling the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(apiObject.channel);
        setCurrData(apiObject.feeds[1]);
        setPastData(apiObject.feeds[0]);
        // setLevel(data.feeds[data.feeds.length - 1].field1);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, [apiObject]);

  console.log(data);
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
          <div
            className="col-md border border-primary-subtle rounded-3"
            style={{ backgroundColor: "#c5c6d0" }}
          >
            <h2 className="text-center">{data[`field${row}`]} - Current</h2>
            <h2
              className="text-center"
              style={{ fontSize: "4rem", color: "white" }}
            >
              {currData[`field${row}`]} {unit}
            </h2>
            <h2 className="text-center">Level {currData[`field${row + 1}`]}</h2>
            <p className="text-center">Created At: {currData["created_at"]}</p>
            <p className="text-center">Entry ID: {currData["entry_id"]}</p>
          </div>
        );
      } else {
        cols.push(
          <div
            className="col-md border border-primary-subtle rounded-3"
            style={{ backgroundColor: "#808080" }}
          >
            <h2 className="text-center">{data[`field${row}`]} - Previous</h2>
            <h2
              className="text-center"
              style={{ fontSize: "4rem", color: "white" }}
            >
              {pastData[`field${row}`]} {unit}
            </h2>
            <h2 className="text-center">Level {pastData[`field${row + 1}`]}</h2>
            <p className="text-center">Created At: {pastData["created_at"]}</p>
            <p className="text-center">Entry ID: {pastData["entry_id"]}</p>
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
      <div className="d-flex justify-content-between align-items-end mx-5">
        <h1 style={{ fontSize: "2.5rem" }}>{typeOfSensor} Sensor</h1>
        <p>updated at: {data.updated_at}</p>
      </div>
      <div
        className={`border border-primary-subtle rounded-3`}
        style={{ margin: "0 5%" }}
      >
        {/* Main logic of the data */}
        {buildGrid()}
      </div>
    </>
  );
}

export default Fields;
