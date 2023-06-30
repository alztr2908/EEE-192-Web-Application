import Sensor from "./Sensor";
import GAA from "./GAA";

function Current() {
  const CURRENT_API =
    "https://api.thingspeak.com/channels/2176112/feeds.json?api_key=FV5HVHIOJKK7M95Q&results";
  return (
    <>
      <Sensor typeOfSensor="Light" unit="Lux" apiData={CURRENT_API} />
      <Sensor typeOfSensor="CO2" unit="ppm" apiData={CURRENT_API} />
      <Sensor typeOfSensor="TVOC" unit="ppb" apiData={CURRENT_API} />
      {/* <GAA apiData={CURRENT_API} /> */}
    </>
  );
}

export default Current;
