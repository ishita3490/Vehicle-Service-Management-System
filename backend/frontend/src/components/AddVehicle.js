import React, { useState } from "react";
import { addVehicle } from "../api";

const AddVehicle = () => {
    const [vin, setVin] = useState("");
    const [issue, setIssue] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addVehicle({ vin, issue_description: issue });
        alert("Vehicle Registered!");
        setVin("");
        setIssue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Vehicle VIN" 
                value={vin} 
                onChange={(e) => setVin(e.target.value)} 
                required 
            />
            <textarea 
                placeholder="Issue Description" 
                value={issue} 
                onChange={(e) => setIssue(e.target.value)} 
                required 
            />
            <button type="submit">Register Vehicle</button>
        </form>
    );
};

export default AddVehicle;
