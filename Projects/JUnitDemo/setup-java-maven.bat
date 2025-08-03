@echo off
cls
echo ========================================
echo    JAVA 17 + MAVEN SETUP SCRIPT (TEMPORARY)
echo ========================================
echo.

echo [1/5] Creating directories...
if not exist "C:\Program Files\Java" mkdir "C:\Program Files\Java"
if not exist "C:\Maven" mkdir "C:\Maven"
if not exist "C:\temp" mkdir "C:\temp"

echo [2/5] Downloading Java 17 JDK...
echo Downloading OpenJDK 17 from Oracle...
powershell -Command "& {[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; $progressPreference = 'silentlyContinue'; Invoke-WebRequest -Uri 'https://download.java.net/java/GA/jdk17.0.2/dfd4a8d0985749f896bed50d7138ee7f/8/GPL/openjdk-17.0.2_windows-x64_bin.zip' -OutFile 'C:\temp\jdk-17.zip' -UseBasicParsing}"

if not exist "C:\temp\jdk-17.zip" (
    echo ERROR: Failed to download from Oracle, trying Microsoft Build of OpenJDK...
    powershell -Command "& {[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; $progressPreference = 'silentlyContinue'; Invoke-WebRequest -Uri 'https://aka.ms/download-jdk/microsoft-jdk-17.0.12-windows-x64.zip' -OutFile 'C:\temp\jdk-17.zip' -UseBasicParsing}"
)

if not exist "C:\temp\jdk-17.zip" (
    echo ERROR: Failed PowerShell downloads, trying curl...
    curl -L "https://download.java.net/java/GA/jdk17.0.2/dfd4a8d0985749f896bed50d7138ee7f/8/GPL/openjdk-17.0.2_windows-x64_bin.zip" -o "C:\temp\jdk-17.zip"
)

if not exist "C:\temp\jdk-17.zip" (
    echo ERROR: Could not download Java 17 automatically.
    echo Please download manually from: https://adoptium.net/temurin/releases/?version=17
    echo Save as: C:\temp\jdk-17.zip
    echo Then press any key to continue...
    pause
)

echo [3/5] Extracting Java 17...
if exist "C:\temp\jdk-17.zip" (
    powershell -Command "& {Expand-Archive -Path 'C:\temp\jdk-17.zip' -DestinationPath 'C:\temp\java-extract' -Force}"
    for /d %%i in ("C:\temp\java-extract\*jdk*") do (
        echo Moving %%i to C:\Program Files\Java\jdk-17
        xcopy "%%i" "C:\Program Files\Java\jdk-17" /E /I /H /Y
    )
    echo Java 17 extracted and installed successfully!
) else (
    echo SKIPPING: Java 17 zip file not found.
)

echo [4/5] Downloading and extracting Maven...
echo Downloading Apache Maven from archive (reliable link)...
powershell -Command "& {[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; $progressPreference = 'silentlyContinue'; Invoke-WebRequest -Uri 'https://archive.apache.org/dist/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.zip' -OutFile 'C:\temp\maven.zip' -UseBasicParsing}"

if not exist "C:\temp\maven.zip" (
    echo ERROR: Failed to download from archive, trying mirrors...
    powershell -Command "& {[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; $progressPreference = 'silentlyContinue'; Invoke-WebRequest -Uri 'https://dlcdn.apache.org/maven/maven-3/3.9.5/binaries/apache-maven-3.9.5-bin.zip' -OutFile 'C:\temp\maven.zip' -UseBasicParsing}"
)

if not exist "C:\temp\maven.zip" (
    echo ERROR: Failed PowerShell download, trying curl...
    curl -L "https://archive.apache.org/dist/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.zip" -o "C:\temp\maven.zip"
)

if not exist "C:\temp\maven.zip" (
    echo ERROR: Could not download Maven automatically.
    echo Please download manually from: https://maven.apache.org/download.cgi
    echo Save as: C:\temp\maven.zip
    echo Then press any key to continue...
    pause
)
powershell -Command "& {Expand-Archive -Path 'C:\temp\maven.zip' -DestinationPath 'C:\temp\maven-extract' -Force}"
for /d %%i in ("C:\temp\maven-extract\apache-maven*") do (
    echo Moving %%i to C:\Maven\apache-maven
    xcopy "%%i" "C:\Maven\apache-maven" /E /I /H /Y
)
echo Maven extracted and installed successfully!

echo [5/5] Setting environment variables TEMPORALLY...

set "JAVA_HOME=C:\Program Files\Java\jdk-17"
set "MAVEN_HOME=C:\Maven\apache-maven"
set "PATH=%JAVA_HOME%\bin;%MAVEN_HOME%\bin;%PATH%"

echo JAVA_HOME set to: %JAVA_HOME%
echo MAVEN_HOME set to: %MAVEN_HOME%
echo PATH temporarily updated.

echo.
echo Cleaning up temporary files...
rd /s /q "C:\temp\java-extract" 2>nul
rd /s /q "C:\temp\maven-extract" 2>nul
del "C:\temp\jdk-17.zip" 2>nul
del "C:\temp\maven.zip" 2>nul

echo.
echo ========================================
echo     TEMPORARY INSTALLATION COMPLETED
echo ========================================
echo.
echo Java and Maven are ready to use in THIS window.
echo Test with:
echo   java -version
echo   mvn -version
echo.
echo To run your project:
echo   cd C:\Dev\JUnitCourse\JUnitDemo
echo   mvn clean compile
echo   mvn exec:java -Dexec.mainClass="com.example.demo.Main"
echo.
echo ========================================
echo    READY! You can now run your tests
echo ========================================
echo Type: java -version   (to verify Java)
echo Type: mvn -version    (to verify Maven)
echo Type: mvn test        (to run your tests)
echo.
echo This window will stay open for you to work!
echo.
cmd /k