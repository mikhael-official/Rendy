#!/data/data/com.termux/files/usr/bin/bash

echo "== Atualizando npm para v11.3.0 =="
npm install -g npm@11.3.0

echo ""
echo "== Verificando ambiente com npm doctor =="
npm doctor

echo ""
echo "== Checando erros do TypeScript =="
npx tsc --noEmit || echo "Erros de TypeScript encontrados."

echo ""
echo "== Listando pacotes instalados =="
jq '{dependencies, devDependencies}' package.json

echo ""
echo "== Repositórios Git configurados =="
git remote -v

echo ""
echo "== Diagnóstico concluído =="
