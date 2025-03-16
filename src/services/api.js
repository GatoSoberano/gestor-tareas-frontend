import axios from "axios";

const API_URL = 'https://gestor-tareas-backend.onrender.com/api';

export const registerUser = (data) => axios.post(`${API_URL}/auth/register`, data);
export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data);
export const getTareas = (token) => axios.get(`${API_URL}/tasks`, { headers: { Authorization: `Bearer ${token}` } });
