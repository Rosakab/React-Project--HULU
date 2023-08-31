
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      </BrowserRouter>
     
    </>
  );
};

export default App;
