# User Management Backend - Spring Boot

Backend API para la aplicación de gestión de usuarios, migrado de Node.js/Express a Spring Boot.

## Tecnologías Utilizadas

- **Spring Boot 3.2.0** - Framework principal
- **Spring Data JPA** - Para acceso a datos
- **Spring Web** - Para APIs REST
- **MySQL** - Base de datos
- **Maven** - Gestión de dependencias
- **Java 17** - Lenguaje de programación

## Estructura del Proyecto

```
backend/
├── src/main/java/com/usermanagement/
│   ├── UserManagementApplication.java     # Clase principal
│   ├── config/
│   │   └── CorsConfig.java               # Configuración CORS
│   ├── controller/
│   │   └── UserController.java           # Controlador REST
│   ├── dto/
│   │   └── UserDTO.java                  # Data Transfer Object
│   ├── entity/
│   │   └── User.java                     # Entidad JPA
│   ├── exception/
│   │   ├── UserNotFoundException.java    # Excepción personalizada
│   │   └── GlobalExceptionHandler.java  # Manejo global de excepciones
│   ├── repository/
│   │   └── UserRepository.java           # Repositorio JPA
│   └── service/
│       └── UserService.java              # Lógica de negocio
├── src/main/resources/
│   └── application.properties            # Configuración
├── pom.xml                              # Configuración Maven
└── start-backend.bat                    # Script de inicio
```

## Endpoints API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/users` | Obtener todos los usuarios |
| GET | `/api/users/{id}` | Obtener usuario por ID |
| POST | `/api/users` | Crear nuevo usuario |
| PUT | `/api/users/{id}` | Actualizar usuario |
| DELETE | `/api/users/{id}` | Eliminar usuario |
| GET | `/api/health` | Verificar salud del servicio |

## Requisitos

- Java 17 o superior
- Maven 3.6 o superior
- MySQL 8.0 o superior

## Configuración de Base de Datos

1. Asegúrate de que MySQL esté ejecutándose
2. La aplicación creará automáticamente la base de datos `user_management` si no existe
3. Las tablas se crean automáticamente con Hibernate

### Configuración personalizada

Puedes modificar la configuración de la base de datos en `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/user_management
spring.datasource.username=root
spring.datasource.password=tu_password
```

## Instalación y Ejecución

### Opción 1: Usando el script (Recomendado)
```bash
./start-backend.bat
```

### Opción 2: Comandos manuales
```bash
# Instalar dependencias
mvn clean install

# Ejecutar aplicación
mvn spring-boot:run
```

### Opción 3: Ejecutar JAR
```bash
# Construir JAR
mvn clean package

# Ejecutar JAR
java -jar target/user-management-backend-1.0.0.jar
```

## Variables de Entorno

Puedes configurar las siguientes variables de entorno:

```
DB_HOST=localhost
DB_PORT=3306
DB_NAME=user_management
DB_USER=root
DB_PASSWORD=
SERVER_PORT=3001
```

## Características Principales

- **Validación automática** de datos de entrada
- **Manejo global de excepciones** con respuestas consistentes
- **CORS configurado** para el frontend en localhost:5173
- **JPA/Hibernate** para mapeo objeto-relacional
- **Timestamps automáticos** (created_at, updated_at)
- **Ordenamiento** por fecha de creación (más recientes primero)

## Diferencias con la versión Node.js

- **Tipado fuerte** con Java vs JavaScript dinámico
- **Inyección de dependencias** nativa de Spring
- **JPA/Hibernate** vs queries SQL manuales
- **Validaciones declarativas** con anotaciones
- **Manejo de excepciones** más estructurado
- **Configuración** basada en archivos properties vs variables de entorno

## Desarrollo

Para desarrollo con recarga automática:

```bash
mvn spring-boot:run -Dspring-boot.run.fork=false
```

## Testing

```bash
# Ejecutar tests
mvn test

# Ejecutar con coverage
mvn test jacoco:report
```

## Logs

Los logs se muestran en consola con diferentes niveles configurables en `application.properties`.

## Troubleshooting

1. **Error de conexión a MySQL**: Verificar que MySQL esté ejecutándose y las credenciales sean correctas
2. **Puerto ocupado**: Cambiar el puerto en `application.properties`
3. **Error de dependencias**: Ejecutar `mvn clean install`
4. **Error de Java**: Verificar que Java 17+ esté instalado
