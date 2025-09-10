import React, { useState } from "react";
import "../styles/EstiloCuadro.css";

function Cuadro({ tareas, onToggle, onDelete, onEdit }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditStart = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleEditSave = (id) => {
    if (editText.trim()) {
      onEdit(id, editText.trim());
      setEditingId(null);
      setEditText("");
    }
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditText("");
  };

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
            {editingId === t.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleEditSave(t.id);
                  }
                  if (e.key === 'Escape') {
                    handleEditCancel();
                  }
                }}
                autoFocus
                className="edit-input"
              />
            ) : (
              <span>{t.text}</span>
            )}
          </label>
          
          {editingId === t.id ? (
            <div className="edit-buttons">
              <button onClick={() => handleEditSave(t.id)}>Guardar</button>
              <button onClick={handleEditCancel}>Cancelar</button>
            </div>
          ) : (
            <div className="action-buttons">
              <button onClick={() => handleEditStart(t.id, t.text)}>Editar</button>
              <button onClick={() => onDelete(t.id)}>Eliminar</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Cuadro;
