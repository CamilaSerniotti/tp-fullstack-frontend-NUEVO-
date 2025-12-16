📝 Frontend - Aplicación de Lista de Tareas (To-Do List)

Aplicación web simple y funcional para la gestión de tareas, construida con React, React Router DOM y Vite. Incluye autenticación con rutas protegidas, utilizando un backend basado en Express y Tokens JWT.
🛠️ Stacks Tecnológicos
Categoría	Tecnología	Notas
Frontend	React, Vite	Librería principal y entorno de desarrollo rápido.
Routing	React Router DOM	Manejo de navegación y rutas protegidas.
Estilos	CSS Puro (App.css)	Estilos limpios y centrados para la tarjeta de login/tareas.
Conexión	Fetch API	Comunicación asíncrona con el Backend.
Seguridad	Local Storage (JWT)	Almacenamiento del token de autenticación.
🚀 Instalación y Ejecución
Prerrequisitos

    Node.js (versión recomendada)

    npm o yarn

    Backend corriendo en http://localhost:4000 (El repositorio del backend es separado).

Pasos

    Clonar el repositorio:
    Bash

git clone https://github.com/CamilaSerniotti/tp-fullstack-frontend-NUEVO-
cd TPFinal_frontend

Instalar dependencias:
Bash

npm install
# o si usas yarn
# yarn install

Iniciar el servidor de desarrollo:
Bash

    npm run dev

La aplicación estará disponible automáticamente en tu navegador, probablemente en http://localhost:5173.
🔐 Variables de Entorno

Aunque no son estrictamente necesarias para la configuración básica de localhost, es buena práctica definir la URL de la API.

Crear un archivo .env en la raíz del proyecto y definir la variable de entorno para el Backend:
Fragmento de código

# URL de la API del Backend (Asegúrate de que coincida con el puerto donde corre Express)
VITE_API_BASE_URL=http://localhost:4000/api/v1

🗺️ Rutas de la Aplicación
Ruta	Componente	Descripción	Protegida
/	TodoList	Página principal. Muestra la lista de tareas.	Sí (Vía ProtectedRoute)
/login	Login	Página para iniciar sesión.	No
/*	SimpleNotFound	Manejo de rutas no definidas (Error 404).	No
Lógica de Navegación

La navegación entre rutas se maneja con el hook useNavigate de React Router:
JavaScript

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  
  // Tras iniciar sesión con éxito:
  navigate('/'); // Redirige a la lista de tareas
};

📦 Componentes Clave
Componente	Función Principal	Descripción
App.jsx	Router Principal	Define las rutas públicas (/login) y las rutas protegidas (/).
Login.jsx	Autenticación	Captura email y password, llama a la API /auth/login, guarda el JWT en localStorage y redirige.
ProtectedRoute.jsx	Guardián	Componente CRÍTICO. Verifica la existencia del token en localStorage. Si no existe, redirige a /login.
TodoList.jsx	Funcionalidad	Muestra y maneja la lógica CRUD (Crear, Leer, Actualizar, Eliminar) de las tareas, requiriendo el token para comunicarse con la API.
🔌 Lógica de Autenticación (Flujo JWT)

El sistema utiliza JSON Web Tokens (JWT) para asegurar el acceso:

    El usuario envía email y password desde Login.jsx a la ruta /auth/login del Backend.

    El Backend verifica las credenciales, genera un JWT y lo devuelve.

    Login.jsx guarda el JWT en localStorage.setItem('token', ...) y navega a /.

    Al intentar acceder a /, ProtectedRoute.jsx revisa localStorage.getItem('token').

    Si el token existe, permite el acceso a TodoList.jsx.

    Las solicitudes de tareas (GET, POST, etc.) desde TodoList.jsx incluyen el token en la cabecera Authorization: Bearer <token>.

📝 Scripts Disponibles
Bash

# Iniciar el servidor de desarrollo con hot reload
npm run dev

# Build para producción
npm run build


IMPORTANTE:
use  Thunder Client poner
Post    http://localhost:4000/api/v1/auth/login
Body    JSON
En El JSON Content poner esto: 
{
    "email": "camilaserniotti@test.com", 
    "password": "camilarosario" 
}

de ahi saca la contraseña y el email para ingresar a la aplicacionde listas


🔒 Seguridad Implementada

    ✅ Rutas protegidas: La ruta principal (/) requiere autenticación JWT.

    ✅ Tokens JWT: Usados para manejar la sesión de usuario.

    ✅ Almacenamiento: Tokens guardados en localStorage.

👤 Autor

Camila Serniotti

    GitHub: [Camila Serniotti]

    Repositorio del Backend: [https://github.com/CamilaSerniotti/tp-fullstack-backend-NUEVO-.git]