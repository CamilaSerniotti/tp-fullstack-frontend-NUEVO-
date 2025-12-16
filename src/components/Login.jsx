// src/components/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import '../styles/Login.css'; // Mantenemos tu import de estilos

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para la redirección

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // 🚨 Puerto de Backend ajustado a 4000
      const API_URL = 'http://localhost:4000/api/v1/auth/login';

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) { // Status 200-299
        if (data.token) {
          // Éxito: Guardar token y redirigir
          localStorage.setItem('token', data.token);
          navigate('/');
        } else {
          setError('Error de servidor: Token no recibido.');
        }
      } else {
        // Fallo: (ej. 401 Unauthorized)
        setError(data.message || 'Credenciales inválidas o error desconocido.');
      }

    } catch (err) {
      // Falla de red (Backend apagado)
      console.error(err);
      setError('No se pudo conectar con el servidor. ¿Está el backend corriendo en el puerto 4000?');
    }
  };

  return (
    // Estructura de estilos correcta (asumiendo que App.jsx no tiene esta clase)
    <div className="login-page-container">
      <div className="login-card">

        <h2 className="login-title">Login de Tareas</h2>
        <span className="close-btn" onClick={() => navigate('/')}>&times;</span>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <p className="error-message">{error}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />

          <button type="submit" className="login-submit-button">
            Ingresar
          </button>
        </form>

        <div className="separator">O</div>

        <div className="social-login-container">
          <button className="social-button google-btn">
            <i className="fab fa-google"></i> Google
          </button>
          <button className="social-button github-btn">
            {/* 🚨 CORRECCIÓN DE SINTAXIS: Se añadió la clase y la comilla de cierre. */}
            <i className="fab fa-github"></i> GitHub
          </button>
        </div>

        <p className="register-link">
          ¿No tienes cuenta? <a href="/register">Regístrate</a>
        </p>

      </div>
    </div>
  );
}

export default Login;