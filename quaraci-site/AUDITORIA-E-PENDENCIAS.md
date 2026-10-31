# Auditoria do site e pendências de publicação

A auditoria completa e as decisões de conteúdo estão no arquivo `../AUDITORIA.md` (também entregue separadamente).

## Decisões importantes
- O Quaraci é apresentado como uma iniciativa institucional única, com frentes relacionadas de pesquisa, extensão e tecnologia, sem confundir os registros administrativos de cada projeto.
- A página de publicações usa materiais reais que aparecem no acervo público anterior. Os links individuais de download não foram fabricados; por enquanto, há um link para o acervo original.
- A equipe e as instituições parceiras não foram incluídas porque precisam de confirmação atualizada.
- As ilustrações, marca, paleta e tipografia do ZIP original foram mantidas como base. Não foram inseridas fotografias genéricas.
- Política de privacidade e exclusão de conta têm páginas independentes e links diretos no rodapé. A rota `/politica-de-privacidade` foi mantida para compatibilidade com o link da Play Store.

## Antes de publicar
- Revisar a política de privacidade e o procedimento de exclusão de conta com a equipe responsável.
- Confirmar a lista atual de equipe, instituições e contatos.
- Validar os links individuais dos documentos publicados.
- Atualizar o endereço da política na Play Console depois de publicar o novo domínio.
- Configurar fallback SPA na hospedagem para que os links diretos funcionem.
- Instalar dependências e executar `npm run build` no ambiente de desenvolvimento/publicação.
