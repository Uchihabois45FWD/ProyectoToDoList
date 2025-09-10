import React, { useState, useEffect } from 'react';
import {
  getTasks,
  createTask,
  deleteTask,
  toggleTask,
  editTask
} from '../services/ServicesTasks';
import TodoForm from '../components/TodoForm';
import Cuadro from '../components/Cuadro';

function Main() {
  const [tareas, setTareas] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);

  const fetchAll = async () => {
    const { data } = await getTasks();
    setTareas(data);
    setCompletedCount(data.filter(t => t.completed).length);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleAdd = async text => {
    await createTask(text);
    fetchAll();
  };

  const handleDelete = async id => {
    await deleteTask(id);
    fetchAll();
  };

  const handleToggle = async (id, completed) => {
    await toggleTask(id, completed);
    fetchAll();
  };

  const handleEdit = async (id, text) => {
    await editTask(id, text);
    fetchAll();
  };

  return (
    <div>
      <h1>Mi ToDo List</h1>
      <TodoForm onAdd={handleAdd} />
      {tareas.length === 0 ? (
        <p>No existen tareas</p>
      ) : (
        <Cuadro
          tareas={tareas}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
      <p>Tareas completadas: {completedCount}</p>
    </div>
  );
}

export default Main;
