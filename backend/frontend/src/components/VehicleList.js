import React, { useEffect, useState } from "react";
import { getVehicles } from "../api";

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        getVehicles()
            .then(response => setVehicles(response.data))
            .catch(error => console.error("Error fetching vehicles:", error));
    }, []);

    return (
        <div>
            <h2>Vehicle List</h2>
            <ul>
                {vehicles.map((vehicle) => (
                    <li key={vehicle.id}>{vehicle.vin} - {vehicle.issue_description}</li>
                ))}
            </ul>
        </div>
    );
};

export default VehicleList;
