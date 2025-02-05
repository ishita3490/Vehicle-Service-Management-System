import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/components/";

const AddComponent = ({ refreshComponents }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(API_URL, { name, price });
            alert("Component added successfully!");
            setName("");
            setPrice("");
            refreshComponents();  // Refresh component list after adding
        } catch (error) {
            console.error("Error adding component:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add New Component</h3>
            <input 
                type="text" 
                placeholder="Component Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required
            />
            <input 
                type="number" 
                placeholder="Price" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                required
            />
            <button type="submit">Add Component</button>
        </form>
    );
};

export default AddComponent;
