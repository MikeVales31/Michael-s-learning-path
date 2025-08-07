@echo off
echo Deploying ListApp to Kubernetes...

echo.
echo Step 1: Building Docker images...
call build-images.bat
if %ERRORLEVEL% neq 0 (
    echo Failed to build images
    exit /b 1
)

echo.
echo Step 2: Deploying MySQL...
kubectl apply -f mysql/mysql-deployment.yaml
if %ERRORLEVEL% neq 0 (
    echo Failed to deploy MySQL
    exit /b 1
)

echo.
echo Step 3: Waiting for MySQL to be ready...
kubectl wait --for=condition=available --timeout=300s deployment/mysql

echo.
echo Step 4: Deploying Backend...
kubectl apply -f deployment/backend-deployment.yaml
if %ERRORLEVEL% neq 0 (
    echo Failed to deploy Backend
    exit /b 1
)

echo.
echo Step 5: Waiting for Backend to be ready...
kubectl wait --for=condition=available --timeout=300s deployment/listapp-backend

echo.
echo Step 6: Deploying Frontend...
kubectl apply -f deployment/frontend-deployment.yaml
if %ERRORLEVEL% neq 0 (
    echo Failed to deploy Frontend
    exit /b 1
)

echo.
echo Step 7: Waiting for Frontend to be ready...
kubectl wait --for=condition=available --timeout=300s deployment/listapp-frontend

echo.
echo ========================================
echo Deployment completed successfully!
echo ========================================
echo.
echo Services:
kubectl get services -l app=listapp-frontend -o wide
kubectl get services -l app=listapp-backend -o wide
kubectl get services -l app=mysql -o wide
echo.
echo Pods:
kubectl get pods -l "app in (listapp-frontend,listapp-backend,mysql)" -o wide
echo.
echo Access your application:
echo Frontend: http://listapp.local (configure your hosts file)
echo Backend API: http://listapp-backend-service:3001
echo.
echo To check logs:
echo kubectl logs -l app=listapp-frontend
echo kubectl logs -l app=listapp-backend  
echo kubectl logs -l app=mysql
