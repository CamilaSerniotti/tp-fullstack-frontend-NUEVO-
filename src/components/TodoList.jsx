import React, { useState } from 'react';
// Importa tus archivos de estilo aquí si usas CSS Modules o archivos separados
// import '../styles/TodoList.css'; 

function TodoList() {
  // Estado para guardar la lista de tareas
  const [todos, setTodos] = useState([]);
  
  // Estado para guardar el valor del input del formulario
  const [todoText, setTodoText] = useState('');

  // Función para manejar el envío del formulario (añadir tarea)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return; // No añadir si está vacío
    
    const newTodo = {
      id: Date.now(), // Un ID único
      text: todoText,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setTodoText(''); // Limpia el input
  };
  
  return (
    <div className="todo-list-app">
      <h1>📅 Mi Agenda de Tareas</h1>
      
      {/* 1. Formulario para añadir tareas */}
      <form onSubmit={handleSubmit} className="todo-form">
        <input 
          type="text" 
          placeholder="Añadir nueva tarea..." 
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className="todo-input"
        />
        <button type="submit" className="todo-button">
          Añadir
        </button>
      </form>
      
      {/* 2. Lista de tareas (donde se mostrarán) */}
      <div className="todos-container">
        {todos.map(todo => (
          // Por ahora solo mostramos el texto.
          // Aquí luego importarás el componente <TodoItem />
          <div key={todo.id} className="todo-item">
            {todo.text}
          </div>
        ))}
        {todos.length === 0 && <p className="no-todos">¡No tienes tareas pendientes!</p>}
      </div>
    </div>
  );
}

export default TodoList;