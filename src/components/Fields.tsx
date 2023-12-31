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
  const [prevData, setPrevData] = useState([]);
  //   UseEffect for handling the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        /* @ts-ignore*/
        setData(apiObject.channel);

        /* @ts-ignore*/

        setCurrData(apiObject.feeds[1]);

        /* @ts-ignore*/

        setPrevData(apiObject.feeds[0]);

        // setLevel(data.feeds[data.feeds.length - 1].field1);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, [apiObject]);

  //   Handle the logic of Accelerometer
  function is_moving(
    x: GLfloat,
    x_old: GLfloat,
    y: GLfloat,
    y_old: GLfloat,
    z: GLfloat,
    z_old: GLfloat
  ) {
    if (
      x >= x_old - 0.01 &&
      x <= x_old + 0.01 &&
      y >= y_old - 0.01 &&
      y <= y_old + 0.01 &&
      z >= z_old - 0.01 &&
      z <= z_old + 0.01
    ) {
      return "The Terrarium is not moving";
    } else {
      return "The Terrarium is moving";
    }
  }

  //   Building the structure of the page
  const buildGrid = () => {
    return renderRows();
  };

  //Returns For example, we can have a row with 2 columns inside it.
  const renderRows = () => {
    let rows = [];

    let j = startingField;

    for (let row = 0; row < fieldCount; row++) {
      rows.push(<div className="row">{renderCols(j)}</div>);

      if (typeOfSensor == "Accelerometer") {
        j += 1;
      } else {
        j += 2;
      }
    }

    return rows;
  };

  //Returns an array of columns with the children inside.
  /* @ts-ignore*/
  const renderCols = (row) => {
    let cols = [];

    for (let col = 0; col < 2; col++) {
      if (col == 0) {
        cols.push(
          <div
            className="col-7 border border-primary-subtle rounded-3"
            style={{ backgroundColor: "#c5c6d0" }}
          >
            {/* @ts-ignore*/}
            <h2 className="text-center">{data[`field${row}`]} - Current</h2>
            <h2
              className="text-center"
              style={{ fontSize: "4rem", color: "white" }}
            >
              {/* @ts-ignore*/}
              {currData[`field${row}`]} {unit}
            </h2>
            <h2 className="text-center">
              {typeOfSensor == "Accelerometer"
                ? ""
                : /* @ts-ignore*/
                  `Level ${currData[`field${row + 1}`]}`}
            </h2>
            {/* @ts-ignore*/}
            <p className="text-center">Created At: {currData["created_at"]}</p>
            {/* @ts-ignore*/}
            <p className="text-center">Entry ID: {currData["entry_id"]}</p>
          </div>
        );
      } else {
        cols.push(
          <div
            className="col-5 border border-primary-subtle rounded-3"
            style={{ backgroundColor: "#808080" }}
          >
            <h3 className="text-center mt-3">
              {/* @ts-ignore*/}
              {data[`field${row}`]} - Previous
            </h3>
            <h2
              className="text-center"
              style={{ fontSize: "3.5rem", color: "white" }}
            >
              {/* @ts-ignore*/}
              {prevData[`field${row}`]} {unit}
            </h2>
            <h3 className="text-center">
              {typeOfSensor == "Accelerometer"
                ? "" /* @ts-ignore*/
                : `Level ${prevData[`field${row + 1}`]}`}
            </h3>
            {/* @ts-ignore*/}
            <p className="text-center">Created At: {prevData["created_at"]}</p>
            {/* @ts-ignore*/}
            <p className="text-center">Entry ID: {prevData["entry_id"]}</p>
          </div>
        );
      }
    }
    return cols;
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-end mx-5">
        <h1 style={{ fontSize: "2.5rem" }}>{typeOfSensor} Sensor</h1>
        {/* @ts-ignore*/}
        <p>updated at: {data.updated_at}</p>
      </div>
      <div
        className={`border border-primary-subtle rounded-3`}
        style={{ margin: "0 5%" }}
      >
        {/* Main logic of the data */}
        {buildGrid()}
        {typeOfSensor == "Accelerometer" ? (
          <h1 className="text-center p-3" style={{ fontSize: "4rem" }}>
            {is_moving(
              /* @ts-ignore*/
              parseFloat(currData.field1),
              /* @ts-ignore*/
              parseFloat(prevData.field1),
              /* @ts-ignore*/
              parseFloat(currData.field2),
              /* @ts-ignore*/
              parseFloat(prevData.field2),
              /* @ts-ignore*/
              parseFloat(currData.field3),
              /* @ts-ignore*/
              parseFloat(prevData.field3)
            )}
          </h1>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Fields;
