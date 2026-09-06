# John Maycon — site para o novo repositório

Site em português, responsivo e sem dependências. Abra `index.html` para visualizar localmente.

## O que mudou

- Título explica o serviço logo na primeira tela.
- Textos mais curtos e remoção da faixa de slogan repetido.
- Menu fixo com Serviços, Sobre, Orçamento e Dúvidas.
- No celular, a marca recolhe ao rolar e os atalhos continuam visíveis.
- A seção atual fica destacada no menu.
- Fontes maiores e cards em uma coluna no celular.
- Um único botão fixo de WhatsApp, com mensagem organizada para orçamento.
- Metadados de compartilhamento e atalho de acessibilidade para o conteúdo.

## Enviar ao novo GitHub

1. Extraia `john-maycon-github.zip` no computador. Não envie apenas o ZIP ao GitHub.
2. Crie o novo repositório e envie o conteúdo extraído, preservando a pasta `assets`.
3. Deixe `index.html`, `styles.css` e `script.js` diretamente na raiz do repositório, sem uma pasta extra envolvendo o site.
4. Confirme o envio em **Commit changes**.
5. Em **Settings → Pages**, selecione **Deploy from a branch**, a branch **main** e a pasta **/(root)**. Salve.
6. Quando a publicação terminar, use o endereço exibido pelo GitHub Pages.

Referência: [documentação oficial do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Alterar os arquivos no computador não altera o GitHub: envie novamente os arquivos modificados a cada atualização. O pacote não contém a pasta `.git` nem a conexão com o repositório antigo.

## Dados confirmados

- Atendimento: Alvarães–AM.
- WhatsApp: +55 97 98105-0917 (`5597981050917`).
- Formas de pagamento: combinar diretamente pelo WhatsApp.

## Informações que ainda precisam ser fornecidas

- **Galeria:** envie quatro a seis fotos reais dos serviços, com uma descrição curta de cada trabalho. Nenhuma galeria fictícia foi incluída.
- **Avaliações:** envie depoimentos reais autorizados para publicação. Nenhum depoimento foi inventado.
- **Horários:** ainda são combinados no WhatsApp; faltam horários confirmados para publicá-los.

## Concluir a prévia de compartilhamento

O título e a descrição já estão no HTML. Após criar o novo repositório, substitua o valor relativo de `og:image` pelo endereço público completo da foto, usando a URL real do site seguida de `/assets/john-maycon-original.jpg`.

Adicione também `og:url` e o link canônico com o endereço definitivo do site. Essas URLs dependem do nome do novo repositório e do usuário do GitHub; não foram inventadas. A prévia da imagem nas redes ainda depende desse ajuste.

## Arquivos

- `index.html`: conteúdo, navegação e link de contato.
- `styles.css`: identidade visual e adaptação ao celular.
- `script.js`: ano, altura do cabeçalho, menu compacto e seção ativa.
- `assets/`: foto original e ícone da aba.

O conteúdo, os atalhos e o WhatsApp funcionam sem JavaScript. Sem JavaScript, o cabeçalho permanece expandido e a seção ativa não recebe destaque automático.

## Logo J.M montagens

A logo está aplicada no cabeçalho, na seção Sobre e no rodapé. O arquivo usado é `assets/jm-montagens-logo.png`, com transparência e tamanho adaptado a cada posição. O menu mantém o comportamento compacto no celular.

A versão para o site foi preparada a partir da imagem enviada, com a ferramenta integrada de edição de imagem (ImageGen), para remover o fundo quadriculado. Prompt utilizado:

> Use case: background-extraction. Edit the attached J.M montagens logo for use as an existing website brand asset. Remove ONLY the white/light gray checkerboard background and surrounding excessive blank margins, making the background genuinely transparent with alpha. Preserve the exact original design: large golden beveled metallic 'J.M' above silver beveled lowercase 'montagens', original shapes, letterforms, proportions, colors and 3D edge detailing. Do not redesign or change spelling. Keep the full logo intact with a small even transparent margin and a tightly framed wide horizontal canvas. No new text, no additional symbols, no painted checkerboard.
