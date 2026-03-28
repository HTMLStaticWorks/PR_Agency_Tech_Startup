@echo off
set "BRAIN_DIR=C:\Users\WELCOME\.gemini\antigravity\brain\c82bae2f-eff9-4227-acc5-a4170711d209"
set "TARGET_DIR=%~dp0assets\images"

if not exist "%TARGET_DIR%" mkdir "%TARGET_DIR%"

:: Technical Insight Assets
echo Copying AI Insight...
copy /Y "%BRAIN_DIR%\ai_llm_insight_webp_1774660068250.png" "%TARGET_DIR%\ai_llm_insight.png"

echo Copying Web3 Insight...
copy /Y "%BRAIN_DIR%\web3_crypto_insight_webp_1774660114617.png" "%TARGET_DIR%\web3_crypto_insight.png"

echo Copying Crisis Tech Insight...
copy /Y "%BRAIN_DIR%\crisis_tech_insight_webp_1774660139304.png" "%TARGET_DIR%\crisis_tech_insight.png"

echo Copying Narrative Design Asset...
copy /Y "%BRAIN_DIR%\narrative_design_featured_webp_1774660163544.png" "%TARGET_DIR%\narrative_design_featured.png"

echo.
echo All premium assets have been copied to %TARGET_DIR%.
echo Please refresh your browser to see the updates.
pause
