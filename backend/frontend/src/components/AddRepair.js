import React, { useState, useEffect } from "react";
import axios from "axios";

const AddRepair = () => {
  const [vehicles, setVehicles] = useState([]);
  const [components, setComponents] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedComponent, setSelectedComponent] = useState("");
  const [repairPrice, setRepairPrice] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/vehicles/")
      .then(response => setVehicles(response.data))
      .catch(error => console.error("Error fetching vehicles:", error));

    axios.get("http://127.0.0.1:8000/api/components/")
      .then(response => setComponents(response.data))
      .catch(error => console.error("Error fetching components:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const repairData = {
      vehicle: selectedVehicle,
      component: selectedComponent,
      repair_price: repairPrice,
      repair_date: new Date().toISOString().split("T")[0], // Today's Date
    };

    axios.post("http://127.0.0.1:8000/api/repairs/", repairData)
      .then(response => alert("✅ Repair Added Successfully!"))
      .catch(error => console.error("Error adding repair:", error));
  };

  return (
    <div>
      <h2>Add Repair</h2>
      <form onSubmit={handleSubmit}>
        <label>Vehicle:</label>
        <select value={selectedVehicle} onChange={(e) => setSelectedVehicle(e.target.value)} required>
          <option value="">Select Vehicle</option>
          {vehicles.map(vehicle => (
            <option key={vehicle.id} value={vehicle.id}>{vehicle.vin}</option>
          ))}
        </select>

        <label>Component:</label>
        <select value={selectedComponent} onChange={(e) => setSelectedComponent(e.target.value)} required>
          <option value="">Select Component</option>
          {components.map(component => (
            <option key={component.id} value={component.id}>{component.name}</option>
          ))}
        </select>

        <label>Repair Price (₹):</label>
        <input type="number" value={repairPrice} onChange={(e) => setRepairPrice(e.target.value)} required />

        <button type="submit">Add Repair</button>
      </form>
    </div>
  );
};

export default AddRepair;  // ✅ Ensure this is at the end
