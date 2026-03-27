@echo off
set "BRAIN_DIR=C:\Users\WELCOME\.gemini\antigravity\brain\3714a57d-9213-417c-bcb1-304ff1a817c2"
set "TARGET_DIR=assets\images"

if not exist "%TARGET_DIR%" mkdir "%TARGET_DIR%"

copy /Y "%BRAIN_DIR%\founder_pitching_llm_1774600995986.png" "%TARGET_DIR%\ai_founder_pitching.png"
copy /Y "%BRAIN_DIR%\web3_trust_podcast_1774601032128.png" "%TARGET_DIR%\web3_trust_podcast.png"
copy /Y "%BRAIN_DIR%\crisis_dashboard_tech_1774601074451.png" "%TARGET_DIR%\crisis_dashboard_tech.png"

echo Images updated and copied successfully to %TARGET_DIR%.
pause
