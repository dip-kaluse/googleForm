import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./Component/MainComponent";
import FormComponent from "./Component/FormComponent";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/formcomponent" element={<FormComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
