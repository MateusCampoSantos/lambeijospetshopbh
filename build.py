#!/usr/bin/env python3
"""Converte o espelho bruto do WordPress (_mirror/) em site estático (docs/)."""

import re
import shutil
from datetime import date
from pathlib import Path

OLD_DOMAIN = "petshopcastelobh.com.br"
NEW_DOMAIN = "lambeijospetshopbh.com.br"
NEW_URL = f"https://{NEW_DOMAIN}"

ROOT = Path(__file__).parent
SRC = ROOT / "_mirror"
OUT = ROOT / "docs"

# Arquivos salvos pelo wget como "foo.css?ver=1.2.css" ou "foo.js?ver=1.2".
QUERY_IN_NAME = re.compile(r"\?[^/]*$")

REMOVE_TAGS = [
    r"<link rel=(['\"])(profile|shortlink|EditURI|https://api\.w\.org/)\1[^>]*>\s*",
    r"<link rel=(['\"])alternate\1[^>]*>\s*",
    r"<link rel='dns-prefetch' href='//www\.googletagmanager\.com' />\s*",
    r"<script[^>]*id=\"google_gtagjs-js\"[^>]*></script>\s*",
    r"<script[^>]*id=\"google_gtagjs-js-after\"[^>]*>.*?</script>\s*",
    r"<script[^>]*id=\"googlesitekit-[^\"]*\"[^>]*>.*?</script>\s*",
    r"<meta name=\"generator\"[^>]*>\s*",
    r"<meta name=\"google-site-verification\"[^>]*>\s*",
]


def clean_name(rel: str) -> str:
    return QUERY_IN_NAME.sub("", rel)


def rewrite(text: str) -> str:
    for pattern in REMOVE_TAGS:
        text = re.sub(pattern, "", text, flags=re.S)

    old = re.escape(OLD_DOMAIN)

    # Versões (?ver=) em assets locais: os arquivos foram renomeados sem elas.
    text = re.sub(
        rf"((?:https?:(?:\\?/){{2}}{old})?(?:\\?/)wp-(?:content|includes)[^\"'\s)]*?)\?ver=[^\"'\s)&]*(?:&#038;[^\"'\s)]*)?",
        r"\1",
        text,
    )

    # Links e assets internos viram relativos à raiz (funciona local e em produção).
    text = re.sub(rf"(<link rel=\"canonical\" href=\")https://{old}", rf"\1{NEW_URL}", text)

    def to_root(m: re.Match) -> str:
        return m.group(0).replace(f"https://{OLD_DOMAIN}/", "/")

    text = re.sub(r"(?:href|src|srcset|data-src|data-srcset)=([\"'])[^\"']*\1", to_root, text)
    text = re.sub(rf"url\(([\"']?)https://{old}/", r"url(\1/", text)
    text = re.sub(rf"https:\\/\\/{old}\\/wp-", r"\\/wp-", text)

    # O restante (og:url, JSON-LD, textos) aponta para o domínio novo.
    text = text.replace(f"https:\\/\\/{OLD_DOMAIN}", f"https:\\/\\/{NEW_DOMAIN}")
    text = text.replace(OLD_DOMAIN, NEW_DOMAIN)
    return text


def main() -> None:
    if OUT.exists():
        for child in OUT.iterdir():
            if child.name != "CNAME":
                shutil.rmtree(child) if child.is_dir() else child.unlink()
    OUT.mkdir(exist_ok=True)

    pages = []
    for src in sorted(SRC.rglob("*")):
        if not src.is_file():
            continue
        rel = src.relative_to(SRC).as_posix()
        if rel.startswith("index.html?"):
            continue  # shortlinks ?p=ID, duplicatas das páginas
        dest = OUT / clean_name(rel)
        dest.parent.mkdir(parents=True, exist_ok=True)

        if src.suffix in {".html", ".css", ".js"} or "?" in src.name:
            data = src.read_text(encoding="utf-8", errors="surrogateescape")
            if src.name.endswith((".html", ".css")) or ".css?" in src.name:
                data = rewrite(data)
            dest.write_text(data, encoding="utf-8", errors="surrogateescape")
        else:
            shutil.copy2(src, dest)

        if dest.name == "index.html":
            path = dest.parent.relative_to(OUT).as_posix()
            pages.append("/" if path == "." else f"/{path}/")

    shutil.copy2(OUT / "index.html", OUT / "404.html")
    (OUT / ".nojekyll").touch()
    (OUT / "CNAME").write_text(NEW_DOMAIN + "\n")

    today = date.today().isoformat()
    urls = "\n".join(
        f"  <url><loc>{NEW_URL}{p}</loc><lastmod>{today}</lastmod></url>" for p in sorted(pages)
    )
    (OUT / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        f"{urls}\n</urlset>\n"
    )
    (OUT / "robots.txt").write_text(f"User-agent: *\nAllow: /\n\nSitemap: {NEW_URL}/sitemap.xml\n")

    leftovers = [
        p.relative_to(OUT).as_posix()
        for p in OUT.rglob("*")
        if p.suffix in {".html", ".css"} and OLD_DOMAIN in p.read_text(errors="ignore")
    ]
    print(f"{len(pages)} páginas geradas em {OUT}")
    if leftovers:
        print("ATENÇÃO: domínio antigo ainda presente em:", *leftovers, sep="\n  ")


if __name__ == "__main__":
    main()
