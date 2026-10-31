# Quaraci — site institucional

Site institucional em React + Vite. O projeto é uma evolução do ZIP recebido: preserva a paleta, as fontes, a marca ilustrativa, a paisagem em SVG e os recursos de acessibilidade existentes, reorganizando navegação e conteúdo.

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
- `/publicacoes` — organização do acervo acadêmico, notícias e documentos
- `/contato` — contato
- `/ajuda/guia-do-aplicativo` — guia introdutório
- `/ajuda/suporte` — suporte
- `/politica-de-privacidade` — política de privacidade (rota mantida para o link da Google Play)
- `/exclusao-de-conta` — solicitação de exclusão de conta

As rotas antigas `/projeto/nosso-trabalho`, `/projeto/aplicativo`, `/ajuda/contato` e `/privacidade` continuam redirecionadas por compatibilidade (renderizam as páginas atuais).

## Onde editar
- `src/menu.js` — navegação, URL da Google Play e e-mail de suporte
- `src/styles.css` — paleta, tipografia, componentes e responsividade
- `src/pages/` — conteúdo das páginas
- `src/components/` — cabeçalho, rodapé, marca, ilustração e acessibilidade
- `src/App.jsx` — rotas

## Antes de publicar
1. Revisar juridicamente e operacionalmente a Política de Privacidade. O conteúdo da página foi transcrito da política que estava vinculada à ficha do aplicativo na Google Play e precisa ser confirmado pela equipe responsável.
2. Confirmar o procedimento de exclusão de conta e se o e-mail publicado continua sendo o canal correto.
3. Atualizar o link de Política de Privacidade na Google Play Console para `https://SEU-DOMINIO/politica-de-privacidade` quando o novo domínio estiver publicado. Manter essa URL pública e estável.
4. Configurar o servidor de hospedagem para servir `index.html` nas rotas do React Router (fallback de SPA), sem quebrar URLs diretas usadas pela Play Store.
5. Atualizar equipe, instituições parceiras, créditos e rodapé somente após receber a lista oficial atualizada.
6. Inserir publicações reais após conferir título, autoria, data, categoria e URL. A página não contém itens fictícios.
7. Aplicar a identidade visual definitiva e as imagens oficiais quando forem entregues; os espaços e componentes atuais já mantêm uma base sem imagens genéricas.

## Observações de conteúdo
O texto institucional foi organizado a partir do site público anterior, da ficha do aplicativo na Google Play e das duas capturas de tela fornecidas pelo usuário (projetos de pesquisa e extensão). Não foi incluída uma lista de equipe porque a composição atual ainda precisa ser confirmada. Também não foram inventadas instituições parceiras ou publicações.
