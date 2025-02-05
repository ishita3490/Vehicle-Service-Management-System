import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ComponentList from "./components/ComponentList";
import VehicleList from "./components/VehicleList";
import AddVehicle from "./components/AddVehicle";
import RevenueGraph from "./components/RevenueGraph";
import AddRepair from "./components/AddRepair"; 

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Components</Link></li>
                    <li><Link to="/vehicles">Vehicles</Link></li>
                    <li><Link to="/add-vehicle">Add Vehicle</Link></li>
                    <li><Link to="/add-repair">Add repair</Link></li>
                    <li><Link to="/revenue">Revenue Graph</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<ComponentList />} />
                <Route path="/vehicles" element={<VehicleList />} />
                <Route path="/add-vehicle" element={<AddVehicle />} />
                <Route path="/add-repair" element={<AddRepair />} /> 
                <Route path="/revenue" element={<RevenueGraph />} />
            </Routes>
        </Router>
    );
}

export default App;
