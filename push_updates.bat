@echo off
echo.
echo ========================================
echo Prism PR — Repository Push Utility
echo ========================================
echo.

:: Navigate to current directory just in case
cd /d "%~dp0"

echo [1/3] Adding changes...
git add .
if %ERRORLEVEL% neq 0 (
    echo Error: Failed to add files.
    pause
    exit /b %ERRORLEVEL%
)

echo [2/3] Committing changes...
git commit -m "Update site: Favicon, Navbar fixed, and UI consistency improvements"
if %ERRORLEVEL% neq 0 (
    echo Error: Failed to commit changes.
    pause
    exit /b %ERRORLEVEL%
)

echo [3/3] Pushing to GitHub...
git push origin master
if %ERRORLEVEL% neq 0 (
    echo Error: Failed to push to GitHub.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo ========================================
echo SUCCESS: Code pushed to GitHub!
echo ========================================
echo.
pause
