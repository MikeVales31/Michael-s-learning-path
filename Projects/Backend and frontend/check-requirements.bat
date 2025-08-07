@echo off
echo 🔍 Verificando requisitos para User Management Application...
echo.

set ERROR_COUNT=0

REM Check Node.js
echo Verificando Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js no está instalado o no está en PATH
    echo    Instalar desde: https://nodejs.org/
    set /a ERROR_COUNT+=1
) else (
    for /f "tokens=*" %%i in ('node --version') do echo ✅ Node.js %%i instalado
)

REM Check npm
echo Verificando npm...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm no está disponible
    set /a ERROR_COUNT+=1
) else (
    for /f "tokens=*" %%i in ('npm --version') do echo ✅ npm %%i instalado
)

REM Check Java
echo Verificando Java...
java -version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Java no está instalado o no está en PATH
    echo    Instalar Java 17 o superior
    set /a ERROR_COUNT+=1
) else (
    echo ✅ Java instalado
    java -version 2>&1 | findstr "version" | head -1
)

REM Check Maven
echo Verificando Maven...
mvn --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Maven no está instalado o no está en PATH
    echo    Instalar desde: https://maven.apache.org/install.html
    set /a ERROR_COUNT+=1
) else (
    for /f "tokens=3" %%i in ('mvn --version ^| findstr "Apache Maven"') do echo ✅ Maven %%i instalado
)

REM Check MySQL
echo Verificando MySQL...
mysql --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ⚠️  MySQL no está en PATH (esto es opcional si está ejecutándose)
    echo    Asegúrate de que MySQL esté ejecutándose en localhost:3306
) else (
    echo ✅ MySQL cliente disponible
)

echo.
echo 📁 Verificando estructura del proyecto...

REM Check frontend dependencies
if exist "package.json" (
    echo ✅ package.json encontrado (frontend)
) else (
    echo ❌ package.json no encontrado en la raíz del proyecto
    set /a ERROR_COUNT+=1
)

REM Check backend structure
if exist "backend\pom.xml" (
    echo ✅ pom.xml encontrado (backend Spring Boot)
) else (
    echo ❌ pom.xml no encontrado en backend/
    set /a ERROR_COUNT+=1
)

if exist "backend\src\main\java\com\usermanagement\UserManagementApplication.java" (
    echo ✅ Aplicación Spring Boot encontrada
) else (
    echo ❌ Aplicación Spring Boot no encontrada
    set /a ERROR_COUNT+=1
)

echo.
if %ERROR_COUNT% equ 0 (
    echo 🎉 ¡Todo listo! Puedes ejecutar la aplicación con:
    echo    ./start-dev.bat
    echo.
    echo 🌐 URLs que estarán disponibles:
    echo    Frontend: http://localhost:5173
    echo    Backend:  http://localhost:3001
) else (
    echo ❌ Se encontraron %ERROR_COUNT% problemas. Resuélvelos antes de continuar.
)

echo.
pause
