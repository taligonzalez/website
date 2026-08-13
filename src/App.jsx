import "./App.css"
import Home from "./Home";
import Programming from "./Programming";
import Academics from "./Academics";
import { Routes, Route, Navigate } from "react-router";
import { Link, Outlet } from "react-router";
import Navbar from "./Navbar";
import ErrorPage from "./ErrorPage";
import Art from "./Art";
import Illustration from "./Illustration";
import ConceptArt from "./ConceptArt";
import Animation from "./Animation";

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route element={<Navbar />}> {/* This is layout  */}
          <Route path="/" element={<Home />} />
          <Route path="/programming" element={<Programming />} />
          {/* <Route path="/academics" element={<Academics />} /> */}
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/art" element={<Art />}>
            <Route index element={<Illustration />} />
            <Route path="illustration" element={<Illustration />} />
            <Route path="conceptart" element={<ConceptArt />} />
            <Route path="animation" element={<Animation />} />
          </Route>
        </Route>

        {/* <Route path="/*" element={<Navigate to="/" />}/> */}
      </Routes>
    </div>
  );
}

export default App;
