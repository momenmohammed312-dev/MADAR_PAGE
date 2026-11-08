@echo off
title MADAR ERP - Landing Page
echo ===================================================
echo     Starting MADAR ERP Landing Page Server...
echo ===================================================
cd /d "%~dp0"
npm run preview -- --port 5173 --host
pause
