# lambeijospetshopbh.com.br

Cópia estática de https://petshopcastelobh.com.br/ publicada no GitHub Pages a partir da pasta `docs/`.

## Editar um texto ou imagem

1. Edite o HTML em `docs/<pagina>/index.html` (a home é `docs/index.html`).
2. Para trocar uma imagem, substitua o arquivo em `docs/wp-content/uploads/...` mantendo o mesmo nome
   (o WordPress gera versões redimensionadas, ex. `-300x300.webp`; troque todas ou ajuste o `srcset`).
3. Teste localmente: `python3 -m http.server 8765 -d docs` e abra http://localhost:8765/
4. Publique: `git add -A && git commit -m "..." && git push`. O site atualiza em ~1 minuto.

## Recopiar tudo do site original

Se o site original (WordPress) mudar e você quiser espelhar de novo:

```bash
./mirror.sh       # baixa o WordPress para _mirror/
python3 build.py  # gera docs/ com o domínio novo
```

Atenção: isso sobrescreve edições feitas manualmente em `docs/`.
