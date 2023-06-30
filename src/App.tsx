import NavBar from "./components/NavBar";
import Current from "./components/Current";
import Overall from "./components/Overall";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      {/* <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      > */}
      <div className="container-sm mx-auto border border-primary-subtle rounded-3">
        {/* <Routes>
          <Route path="/" element={<Current />} />
          <Route path="/overall" element={<Overall />} />
        </Routes> */}
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
