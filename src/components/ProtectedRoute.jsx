// C:\CamilaSerniotti-TPFinal\frontend\src\components\ProtectedRoute.jsx

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  // 1. Obtener el token del almacenamiento local
  const token = localStorage.getItem('token');
  
  // 2. Lógica de verificación
  // Si el token existe, renderiza los hijos de la ruta (<Outlet> que será TodoList)
  if (token) {
    return <Outlet />; 
  }

  // 3. Si el token NO existe, redirige al usuario a la página de Login
  return <Navigate to="/login" replace />; 
}

export default ProtectedRoute;