import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import { Landing, Home, Detail, Form,  Activities } from "./views";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/activities" element={<Activities />} />
        <Route exact path="/create" element={<Form />} />
      </Routes>
   </div>
  );
}

export default App;