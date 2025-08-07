@echo off
echo Building Docker images for ListApp...

echo.
echo Building Frontend image...
cd frontend
docker build -t listapp-frontend:latest .
if %ERRORLEVEL% neq 0 (
    echo Failed to build frontend image
    exit /b 1
)

echo.
echo Building Backend image...
cd ..\backend
docker build -t listapp-backend:latest .
if %ERRORLEVEL% neq 0 (
    echo Failed to build backend image
    exit /b 1
)

echo.
echo Building MySQL image...
cd ..\mysql
docker build -t listapp-mysql:latest .
if %ERRORLEVEL% neq 0 (
    echo Failed to build MySQL image
    exit /b 1
)

echo.
echo All images built successfully!
echo.
echo Frontend: listapp-frontend:latest
echo Backend: listapp-backend:latest
echo MySQL: listapp-mysql:latest

cd ..
