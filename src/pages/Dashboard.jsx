import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [tareas, setTareas] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchTareas = async () => {
      const res = await axios.get("http://localhost:5000/api/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTareas(res.data);
    };
    fetchTareas();
  }, []);

  return (
    <div>
      <h2>Mis Tareas</h2>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.titulo} - {tarea.estado}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
