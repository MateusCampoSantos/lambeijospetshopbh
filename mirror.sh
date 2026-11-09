#!/usr/bin/env bash
# Baixa uma cópia bruta do site WordPress de origem para _mirror/.
# Depois rode: python3 build.py
set -euo pipefail

SOURCE="https://petshopcastelobh.com.br/"

cd "$(dirname "$0")"
rm -rf _mirror
wget --mirror --page-requisites --adjust-extension --no-parent \
  -e robots=off -U "Mozilla/5.0" \
  --reject-regex '(/feed/|/wp-json/|xmlrpc\.php|/comments/|\?replytocom=|/wp-admin/|wp-login)' \
  -nH -P _mirror "$SOURCE"

# O Elementor carrega partes do JS sob demanda (o wget não as enxerga no HTML).
fetch() { wget -q -U "Mozilla/5.0" -O "_mirror/$1" "${SOURCE}$1" || { rm -f "_mirror/$1"; echo "falhou: $1"; }; }

CORE=wp-content/plugins/elementor/assets/js
mkdir -p "_mirror/$CORE/chunks"
for name in $(cat _mirror/$CORE/*.js* | grep -oE '__elementorLoadChunk\(`[a-z0-9-]+`\)|`background-(slideshow|video)`' \
    | grep -oE '`[a-z0-9-]+`' | tr -d '`' | sort -u); do
  fetch "$CORE/chunks/$name.min.js"
done

PRO=wp-content/plugins/elementor-pro/assets/js
for file in $(cat _mirror/$PRO/webpack-pro.runtime.min.js* | grep -oE '"[a-z0-9-]*\.?[0-9a-f]{20}\.bundle\.min\.js"' | tr -d '"' | sort -u); do
  fetch "$PRO/$file"
done
