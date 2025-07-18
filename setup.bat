@echo off
echo ========================================
echo Astro Modular Template Setup (Windows)
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js version:
node --version

echo.
echo Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo Setting up environment variables...
if not exist .env (
    copy .env.example .env
    echo Created .env file from .env.example
    echo Please edit .env file with your specific values
) else (
    echo .env file already exists
)

echo.
echo Checking TypeScript configuration...
npm run check

if %errorlevel% neq 0 (
    echo WARNING: TypeScript check failed
    echo This might be normal if you haven't added content yet
)

echo.
echo ========================================
echo Setup completed successfully!
echo ========================================
echo.
echo Next steps:
echo 1. Edit .env file with your site information
echo 2. Update src/components/componentRegistry.ts
echo 3. Customize colors in tailwind.config.mjs
echo 4. Start development server: npm run dev
echo.
echo Component Registry Reminder:
echo ALWAYS check src/components/componentRegistry.ts
echo before creating new components!
echo.
pause
