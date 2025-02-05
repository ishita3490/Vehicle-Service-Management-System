import axios from 'axios';

// Set the Django backend API URL
const API_URL = "http://127.0.0.1:8000/api/";

// Fetch all components
export const getComponents = () => axios.get(`${API_URL}components/`);

// Fetch all vehicles
export const getVehicles = () => axios.get(`${API_URL}vehicles/`);

// Fetch all repairs
export const getRepairs = () => axios.get(`${API_URL}repairs/`);

// Add a new vehicle
export const addVehicle = (data) => axios.post(`${API_URL}vehicles/`, data);

// Add a new repair
export const addRepair = (data) => axios.post(`${API_URL}repairs/`, data);
