@echo off
echo 🚀 Starting User Management Backend (Spring Boot)...
echo.

REM Check if Maven is installed
mvn --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Maven is not installed or not in PATH
    echo Please install Maven first: https://maven.apache.org/install.html
    pause
    exit /b 1
)

REM Check if Java is installed
java -version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Java is not installed or not in PATH
    echo Please install Java 17 or later
    pause
    exit /b 1
)

echo ✅ Maven and Java found
echo.

REM Navigate to backend directory
cd /d "%~dp0"

echo 📦 Installing dependencies...
mvn clean install -DskipTests

if %errorlevel% neq 0 (
    echo ❌ Failed to build project
    pause
    exit /b 1
)

echo.
echo 🏃‍♂️ Starting application...
mvn spring-boot:run
