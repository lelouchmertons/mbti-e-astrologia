# MBTI e Astrologia

PWA informativo com fichas dos 16 tipos MBTI, teste provisório, comparações entre tipos, conteúdo sobre os signos e geração local de mapa astral.

## Implantação na Vercel

O projeto já inclui `vercel.json`. Ao importar este repositório na Vercel:

- use o preset **Other**;
- mantenha o diretório raiz em `./`;
- não é necessário informar comando de build;
- a pasta pública `dist` já está configurada como diretório de saída.

O mapa astral é calculado no próprio navegador. Os arquivos de efemérides necessários ao cálculo estão incluídos no projeto para permitir uso offline depois que o PWA estiver instalado e seus recursos tiverem sido armazenados.

## Licenças

O projeto é distribuído sob a licença AGPL-3.0. O mecanismo Swiss Ephemeris incluído em `dist/vendor/swisseph` mantém o respectivo aviso de licença no mesmo diretório.
