import { useState, useEffect } from "react";

interface Props {
  typeOfSensor: string;
  unit: string;
  apiData: string;
}

function Fields({ typeOfSensor, unit, apiData }: Props) {
  return (
    <>
      <div className="d-flex justify-content-center">
        <h2 style={{ fontSize: "1.5rem" }}>{typeOfSensor} Sensor</h2>
      </div>
      <div
        className={`d-flex justify-content-center border border-primary-subtle rounded-3`}
        style={{ margin: "0 5%" }}
      >
        <h1>Hello</h1>
      </div>
    </>
  );
}

export default Fields;
