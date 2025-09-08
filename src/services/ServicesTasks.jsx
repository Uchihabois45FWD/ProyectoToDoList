import axios from 'axios';

const API_URL = 'http://localhost:3001/tareas';

export const getTasks = () => axios.get(API_URL);

export const createTask = text =>
  axios.post(API_URL, { text, completed: false });

export const deleteTask = id =>
  axios.delete(`${API_URL}/${id}`);

export const toggleTask = (id, completed) =>
  axios.patch(`${API_URL}/${id}`, { completed });
