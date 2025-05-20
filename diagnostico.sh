#!/data/data/com.termux/files/usr/bin/bash

echo "== npm doctor =="
npm doctor

echo
echo "== TypeScript Check =="
npx tsc --noEmit

echo
echo "== Pacotes Instalados =="
jq '{dependencies, devDependencies}' package.json

echo
echo "== Repositórios Git =="
git remote -v
