# Quaraci — site institucional

Site institucional desenvolvido em React + Vite. Esta versão reorganiza a apresentação do Quaraci, preservando a marca ilustrativa e a paisagem em SVG enquanto a equipe reúne fotografias e materiais visuais próprios.

## Requisitos
- Node.js 18 ou superior
- npm

## Executar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de publicação:

```bash
npm run build
npm run preview
```

A saída de produção fica em `dist/`.

## Páginas
- `/` — Início
- `/projeto` — O projeto, com as frentes de pesquisa, extensão e tecnologia
- `/aplicativo` — Quaraci App
- `/territorios` — Territórios e comunidades
- `/publicacoes` — Acervo e produções relacionadas
- `/contato` — Contato
- `/ajuda/guia-do-aplicativo` — Guia introdutório
- `/ajuda/suporte` — Suporte
- `/politica-de-privacidade` — Política de privacidade
- `/exclusao-de-conta` — Solicitação de exclusão de conta

As rotas antigas `/projeto/nosso-trabalho`, `/projeto/aplicativo`, `/ajuda/contato` e `/privacidade` continuam disponíveis por compatibilidade.

## Onde editar
- `src/menu.js` — navegação, URL da Google Play e e-mail de suporte
- `src/styles.css` — paleta, tipografia, componentes e responsividade
- `src/pages/` — conteúdo das páginas
- `src/components/` — cabeçalho, rodapé, marca e ilustração
- `src/App.jsx` — rotas

## Pendências de conteúdo
1. Revisar juridicamente e operacionalmente a Política de Privacidade antes de substituir a página oficial.
2. Confirmar o procedimento de exclusão de conta e se o e-mail publicado continua sendo o canal correto.
3. Atualizar equipe, instituições parceiras e créditos somente após receber a lista oficial.
4. Conferir título, autoria, data, categoria e endereço de cada publicação quando os arquivos e links forem disponibilizados.
5. Substituir a ilustração provisória e os espaços gráficos por fotografias oficiais selecionadas pela equipe.

## Observações
O conteúdo institucional foi organizado a partir do site público anterior, da ficha do aplicativo na Google Play e dos registros de pesquisa e extensão compartilhados durante o projeto. Não foi incluída uma lista de equipe nem instituições parceiras sem confirmação. Também não foram criados links individuais de publicações que não puderam ser verificados.
