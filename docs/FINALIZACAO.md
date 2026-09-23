# Finalização do site MOV Saúde

## Google Forms e Google Planilhas

1. Na Conta Google da responsável pela clínica, criar o formulário com:
   - Nome: resposta curta, obrigatório.
   - Telefone/WhatsApp: resposta curta, obrigatório (não usar campo numérico).
   - Como podemos te ajudar?: parágrafo, obrigatório.
2. Configurar a mensagem de confirmação como `Aguarde nosso contato`.
3. Permitir respostas do público, sem exigir login. Não habilitar o resumo
   público de respostas nem a limitação de uma resposta por conta.
4. Em Respostas, vincular uma nova planilha do Google Planilhas. Manter o
   acesso à planilha restrito à responsável e às pessoas autorizadas.
5. Publicar o formulário e copiar o link para os participantes (não o de edição).
6. Colar esse endereço em `appointmentFormUrl`, no arquivo
   `src/config/contact.js`. O cabeçalho e a chamada final usam essa configuração.
7. Executar `npm run build` e publicar a nova versão do site.
8. Abrir o link em uma janela anônima, enviar uma resposta de teste e conferir
   a mensagem final e a nova linha na planilha da responsável.

Enquanto o endereço estiver vazio, os botões mostram “Formulário em breve”
e ficam desabilitados. Os links de WhatsApp permanecem disponíveis.
O site não armazena respostas: o envio e a confirmação acontecem no Forms.

## Fotos da galeria

A seção fica antes da chamada final. As fotos provisórias são do Pexels e
não representam a clínica; as fontes estão em `docs/GALLERY_SOURCES.md`.
A galeria mostra três imagens no computador e uma no celular, com transição
suave a cada cinco segundos. As setas pausam a reprodução para permitir
observar a foto escolhida; o botão central retoma a troca automática.
Com preferência por movimento reduzido, a navegação é somente manual.

1. Colocar as fotos definitivas em `public/gallery/` (criar a pasta).
2. Em `src/data/gallery.js`, preencher `src` com o caminho de cada foto,
   por exemplo `/gallery/recepcao.jpg`.
3. Preencher `alt` com uma descrição real da imagem e ajustar `caption`,
   que é a legenda visível. Manter um `id` exclusivo para cada item.
4. Preferir fotos otimizadas e verificar o recorte 4:3 em celular e computador.
5. Remover itens que não serão usados e a propriedade `illustrative` das fotos
   definitivas. O aviso de fotos ilustrativas desaparece quando nenhuma foto
   tem essa propriedade ativa. Sem imagens, aparece “Em breve, fotos da nossa clínica”.

Exemplo de item definitivo:

```js
{ id: "reception", src: "/gallery/recepcao.jpg", alt: "Recepção da MOV Saúde", caption: "Nossa recepção" }
```
