$node = "C:\Users\krish\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$vite = Join-Path $PSScriptRoot "node_modules\vite\bin\vite.js"

if (!(Test-Path $node)) {
  Write-Error "Bundled Node was not found at $node"
  exit 1
}

if (!(Test-Path $vite)) {
  Write-Error "Dependencies are missing. Ask Codex to reinstall them or install Node.js and run npm install."
  exit 1
}

& $node $vite --host 127.0.0.1
