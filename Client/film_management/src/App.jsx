import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import { Landing, Home, Detail, Form , ModifyForm} from "./views";
import  Checkin  from "./components/Checkin/Checkin.jsx"
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/checkin" && <NavBar/>}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/create" element={<Form />} />
        <Route exact path="/modify" element={<ModifyForm />} />
        <Route exact path="/checkin" element={<Checkin />} />
      </Routes>
   </div>
  );
}

export default App;