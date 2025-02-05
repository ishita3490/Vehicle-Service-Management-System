import React, { useEffect, useState } from "react";
import { getComponents } from "../api";
import AddComponent from "./AddComponent";

const ComponentList = () => {
    const [components, setComponents] = useState([]);

    const fetchComponents = () => {
        getComponents()
            .then(response => setComponents(response.data))
            .catch(error => console.error("Error fetching components:", error));
    };

    useEffect(() => {
        fetchComponents();
    }, []);

    return (
        <div>
            <h2>Component List</h2>
            <AddComponent refreshComponents={fetchComponents} />  {/* Add New Component Form */}
            {components.length === 0 ? (
                <p>No components available.</p>
            ) : (
                <ul>
                    {components.map((comp) => (
                        <li key={comp.id}>{comp.name} - ₹{comp.price}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ComponentList;
