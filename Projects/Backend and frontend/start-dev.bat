@echo off
echo Starting User Management Application (Spring Boot + React)...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js is installed

REM Check if Java is installed
java -version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Java is not installed or not in PATH
    echo Please install Java 17 or later
    pause
    exit /b 1
)

echo ✓ Java is installed

REM Check if Maven is installed
mvn --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Maven is not installed or not in PATH
    echo Please install Maven from https://maven.apache.org/install.html
    pause
    exit /b 1
)

echo ✓ Maven is installed

REM Start backend (Spring Boot)
echo.
echo Starting Backend Server (Spring Boot)...
cd /d "%~dp0backend"
start "Spring Boot Backend" cmd /c "mvn spring-boot:run"

REM Wait a moment for backend to start
timeout /t 5 /nobreak >nul

REM Start frontend
echo.
echo Starting Frontend Development Server (React + Vite)...
cd /d "%~dp0"
start "React Frontend" cmd /c "npm run dev"

echo.
echo Both servers are starting...
echo Backend (Spring Boot): http://localhost:3001
echo Frontend (React): http://localhost:5173
echo.
echo Press any key to close this window (servers will continue running)
pause >nul
