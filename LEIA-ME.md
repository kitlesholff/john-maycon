# John Maycon — Montador de móveis

Site responsivo em português, com prioridade para celular. Arquivos simples, sem dependências, fontes remotas ou ferramentas de compilação.

## Abrir e editar no VS Code

1. Extraia o ZIP inteiro.
2. No VS Code, escolha **Arquivo → Abrir Pasta** e selecione `john-maycon`.
3. Abra `index.html` diretamente no navegador. Se preferir atualização automática enquanto edita, utilize a extensão Live Server do VS Code.

## Arquivos

- `index.html`: conteúdo, metadados, seções e o único link de WhatsApp.
- `styles.css`: cores, tipografia, layout, enquadramento da foto e regras para celular.
- `script.js`: atualização automática do ano no rodapé; não é necessário para o contato funcionar.
- `assets/john-maycon-original.jpg`: imagem original fornecida, usada com enquadramento por CSS.
- `assets/favicon.svg`: ícone da aba, editável.

## Personalizar

**Textos:** edite no `index.html`.

**Cores:** altere as variáveis no início de `styles.css`. `--accent` controla o amarelo.

**Imagem:** substitua a imagem em `assets` e atualize o caminho e as regras `.portrait > img` no CSS. O enquadramento atual mostra o profissional sem modificar o arquivo original. Para uma troca mais simples, use um retrato vertical e defina `inset:0; width:100%; height:100%; object-fit:cover; object-position:center;` na imagem, inclusive na regra mobile.

**WhatsApp:** há apenas um botão, fixo, usado em todas as larguras de tela. Procure `https://wa.me/559781050917` no HTML. O número foi configurado exatamente conforme o pedido escrito: **+55 97 8105-0917**. A arte enviada apresenta um 9 adicional; ele não foi acrescentado ao link. Confirme o número antes de divulgar. Se o número correto for o da arte, altere o destino para `https://wa.me/5597981050917`, preservando a mensagem após `?text=` se desejar.

## Publicar

Envie `index.html`, `styles.css`, `script.js` e a pasta `assets` para a pasta pública da hospedagem. Preserve a estrutura de pastas. Não é necessário instalar pacotes nem compilar. Este pacote é local; não inclui hospedagem ou domínio.

## Notas de conteúdo e acessibilidade

Não foram inventados depoimentos, números de clientes, anos de experiência, preços ou portfólio de serviços realizados. Região de atendimento, disponibilidade e condições são consultadas no contato. A foto é o material fornecido pelo solicitante; confirme a autorização de uso antes de publicar.

O layout inclui adaptação para celular, foco visível por teclado, títulos semânticos, perguntas expansíveis nativas, descrição de imagem, respeito à preferência de movimento reduzido e espaço reservado para o botão fixo. Não utiliza rastreadores ou cookies.
