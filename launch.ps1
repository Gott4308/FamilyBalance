$ErrorActionPreference = "Stop"
$application = Join-Path $PSScriptRoot "release\Family.exe"
if (-not (Test-Path $application)) {
  throw "Сначала соберите Family.exe командой pnpm desktop:dist."
}
Start-Process -FilePath $application