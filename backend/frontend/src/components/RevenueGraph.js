import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import axios from "axios";

const RevenueGraph = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/revenue/")
            .then(response => setData(response.data.daily))  // Use daily revenue data
            .catch(error => console.error("Error fetching revenue data:", error));
    }, []);

    return (
        <div>
            <h2>Revenue Graph</h2>
            <BarChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default RevenueGraph;
