# PowerShell script to move high-quality images to areassets/images
$brainDir = "C:\Users\WELCOME\..gemini\antigravity\brain\3714a57d-9213-417c-bcb1-304ff1a817c2"
$targetDir = "assets\images"

if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir
}

Copy-Item -Path "$brainDir\cinematic_ai_founder_1774602075170.png" -Destination "$targetDir\ai_high_res.png" -Force
Copy-Item -Path "$brainDir\futuristic_web3_logo_1774602137907.png" -Destination "$targetDir\web3_high_res.png" -Force
Copy-Item -Path "$brainDir\cinematic_crisis_dashboard_1774602203648.png" -Destination "$targetDir\crisis_high_res.png"

Write-Host "Success! High-quality images have been deployed to your project." -ForegroundColor Green
Pause
