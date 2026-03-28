@echo off
set "BRAIN_DIR=C:\Users\WELCOME\.gemini\antigravity\brain\74e3e3cf-fd78-4ca1-acea-8b662cf444e3"
set "TARGET_DIR=%~dp0assets\images"

if not exist "%TARGET_DIR%" mkdir "%TARGET_DIR%"

:: Blog/Technical Insights
copy /Y "%BRAIN_DIR%\ai_neural_strategy_1774619519684.png" "%TARGET_DIR%\ai_neural_strategy.png"
copy /Y "%BRAIN_DIR%\web3_decentralized_media_1774619597248.png" "%TARGET_DIR%\web3_decentralized_media.png"
copy /Y "%BRAIN_DIR%\crisis_tech_dashboard_1774619669163.png" "%TARGET_DIR%\crisis_tech_dashboard.png"

:: Hero Section
copy /Y "%BRAIN_DIR%\hero_pr_dashboard_1774619998678.png" "%TARGET_DIR%\hero_pr_dashboard.png"

:: Core Features
copy /Y "%BRAIN_DIR%\feature_outreach_visual_v2_1774620079849.png" "%TARGET_DIR%\feature_outreach.png"
copy /Y "%BRAIN_DIR%\feature_presskit_visual_1774620161765.png" "%TARGET_DIR%\feature_presskit.png"
copy /Y "%BRAIN_DIR%\feature_crisis_mitigation_visual_1774620239320.png" "%TARGET_DIR%\feature_crisis.png"

echo All premium images updated and copied successfully to %TARGET_DIR%.
pause
