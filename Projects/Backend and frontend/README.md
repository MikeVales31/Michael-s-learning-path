# Aplicación de Gestión de Usuarios

Una aplicación full-stack para gestión de usuarios con frontend React + Vite y backend Spring Boot.

## 🚀 Tecnologías

### Frontend
- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **CSS3** - Estilos responsivos
- **JavaScript ES6+** - Lenguaje principal

### Backend
- **Spring Boot 3.2.0** - Framework backend
- **Spring Data JPA** - ORM y acceso a datos
- **MySQL** - Base de datos
- **Maven** - Gestión de dependencias
- **Java 17** - Lenguaje de programación

## 📋 Requisitos

- **Node.js** 16+ y npm
- **Java** 17 o superior
- **Maven** 3.6+
- **MySQL** 8.0+

## 🛠️ Instalación y Ejecución

### Opción 1: Inicio automático (Recomendado)
```bash
# Ejecutar el script que inicia ambos servidores
./start-dev.bat
```

### Opción 2: Inicio manual

#### Backend (Spring Boot)
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

#### Frontend (React + Vite)
```bash
npm install
npm run dev
```

## 🌐 URLs de Acceso

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001
- **Health Check**: http://localhost:3001/api/health

## 📚 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/users` | Obtener todos los usuarios |
| POST | `/api/users` | Crear nuevo usuario |
| PUT | `/api/users/{id}` | Actualizar usuario |
| DELETE | `/api/users/{id}` | Eliminar usuario |
| GET | `/api/health` | Verificar estado del servidor |

## 🗄️ Base de Datos

La aplicación se conecta a MySQL y crea automáticamente:
- Base de datos: `user_management`
- Tabla: `users` con campos:
  - `id` (AUTO_INCREMENT PRIMARY KEY)
  - `username` (VARCHAR(255) NOT NULL)
  - `age` (INT NOT NULL)
  - `created_at` (TIMESTAMP)
  - `updated_at` (TIMESTAMP)

## 🔧 Configuración

### Backend
Configurar base de datos en `backend/src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/user_management
spring.datasource.username=root
spring.datasource.password=tu_password
```

### Frontend
El frontend está configurado para conectarse al backend en `localhost:3001`.

## 📁 Estructura del Proyecto

```
my-app/
├── backend/                     # Spring Boot backend
│   ├── src/main/java/com/usermanagement/
│   │   ├── controller/         # REST controllers
│   │   ├── entity/            # JPA entities
│   │   ├── service/           # Business logic
│   │   ├── repository/        # Data access
│   │   ├── dto/              # Data transfer objects
│   │   ├── exception/        # Exception handling
│   │   └── config/           # Configuration
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml               # Maven dependencies
├── src/                       # React frontend
│   ├── components/           # React components
│   ├── services/            # API services
│   ├── App.jsx              # Main component
│   └── main.jsx             # Entry point
├── public/                   # Static assets
├── package.json             # Frontend dependencies
└── start-dev.bat           # Startup script
```

## ✨ Características

- **CRUD completo** de usuarios
- **Validación** de datos tanto en frontend como backend
- **Manejo de errores** robusto
- **Interfaz responsiva** y amigable
- **API REST** bien estructurada
- **Timestamps automáticos** para auditoría
- **CORS configurado** para desarrollo

## 🚦 Migración de Node.js a Spring Boot

El backend fue migrado de Node.js/Express a Spring Boot manteniendo la misma funcionalidad:

### Beneficios de la migración:
- **Tipado fuerte** con Java
- **Inyección de dependencias** nativa
- **JPA/Hibernate** para ORM
- **Validaciones declarativas**
- **Manejo estructurado de excepciones**
- **Ecosistema Spring** robusto

## 🐛 Troubleshooting

1. **Puerto ocupado**: Cambiar puertos en la configuración
2. **Error de MySQL**: Verificar que esté ejecutándose
3. **Error de dependencias**: Ejecutar `mvn clean install` y `npm install`
4. **CORS errors**: Verificar configuración de CORS en el backend

## 📝 Notas de Desarrollo

- El frontend usa Vite para hot reload durante desarrollo
- El backend usa Spring DevTools para recarga automática
- La base de datos se crea automáticamente en el primer inicio
- Los logs se muestran en consola para debugging
