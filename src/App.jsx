// src/App.jsx - VERSIÓN CON ESTILO Y FUNCIONALIDAD CORRECTA

import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css'; 

import TodoList from './components/TodoList'; 
import Login from './components/Login';       
import ProtectedRoute from './components/ProtectedRoute'; 

// Componente simple para manejar el error 404 y evitar la falla de Webpack.
const SimpleNotFound = () => (
    <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>¡Error 404!</h2>
        <p>La página que buscas no existe.</p>
    </div>
);

function App() {
  return (
    // 🚨 PASO 1: ENVOLVEMOS TODA LA APLICACIÓN CON EL FONDO Y CENTRADO
    <div className="login-page-container">
        
        {/* 🚨 PASO 2: AÑADIMOS EL CONTENEDOR DE LA TARJETA (aplicado a ambas rutas) */}
        {/* Le damos un ancho máximo para que se vea bien como tarjeta, puedes ajustarlo si quieres la lista más ancha */}
        <div className="login-card" style={{ maxWidth: '600px', padding: '20px' }}>
      
            <Routes>
                
                {/* 1. GRUPO DE RUTAS PROTEGIDAS */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<TodoList />} /> 
                </Route>
                
                {/* 2. RUTAS PÚBLICAS */}
                <Route path="/login" element={<Login />} />
                
                {/* 3. RUTA 404 */}
                <Route path="*" element={<SimpleNotFound />} />
                
            </Routes>
        
        </div> {/* CIERRE de .login-card */}
    </div> /* CIERRE de .login-page-container */
  );
}

export default App;