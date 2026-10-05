# Finalização do site MOV Saúde

## Google Forms e Google Planilhas

Atualização em 01/10/2026: link público configurado em `src/config/contact.js`.
O formulário disponibilizado pela clínica contém nome completo, WhatsApp com
DDD, escolha do atendimento e descrição livre, todos obrigatórios.
Pendente: confirmar com a responsável o recebimento do teste na planilha e
a mensagem após o envio. A consulta pública não confirma essas configurações.

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

## Fotos do carrossel inicial

Todas as fotos ficam no início do site, em `src/data/heroPhotos.js`.
A antiga seção de galeria e seu link no menu foram removidos.
O carrossel mantém a troca suave a cada três segundos e o botão de pausa
no canto inferior esquerdo. A preferência por movimento reduzido desativa
as trocas automáticas, conforme o comportamento anterior.

O carrossel contém oito fotos da clínica: as três originais e cinco enviadas
em 05/10/2026. As fotos provisórias do Pexels foram substituídas.

1. Colocar as fotos definitivas em `public/gallery/` ou importar de `src/assets`.
2. Em `src/data/heroPhotos.js`, atualizar `src` e a descrição `alt`.
3. Ajustar `position` para controlar o recorte, se necessário.
4. Adicionar ou remover itens da lista para definir as fotos e sua ordem.

Exemplo de item definitivo:

```js
{ src: "/gallery/recepcao.jpg", alt: "Recepção da MOV Saúde", position: "center" }
```
