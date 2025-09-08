import React from "react";

function Cuadro({ tareas, onToggle, onDelete }) {
  return (
    <ul>
      {tareas.map((t) => (
        <li key={t.id}>
          <label>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => onToggle(t.id, !t.completed)}
            />
            <span>{t.text}</span>
          </label>
          <button onClick={() => onDelete(t.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default Cuadro;
