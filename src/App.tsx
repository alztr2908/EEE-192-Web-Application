import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Current from "./Pages/Current";
import Overall from "./Pages/Overall";
import Legend from "./Pages/Legend";
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
        <Routes>
          <Route path="/" element={<Current />} />
          <Route path="/overall" element={<Overall />} />
          <Route path="/legend" element={<Legend />} />
        </Routes>
      </div>
      {/* </div> */}
      <Footer />
    </>
  );
}

export default App;
