# Ajustes e validação mobile — 05/10/2026

## Escopo

Adaptação do site existente, preservando textos, fotos, cores, fontes e identidade
visual. Não foram adicionadas funcionalidades de negócio. As regras de layout
alteradas ficam nos breakpoints até 768 ou 1024 px. O desktop começa em 1025 px.

## O que foi corrigido

| Área | Antes | Depois | Código |
| --- | --- | --- | --- |
| Cabeçalho fechado | A navegação oculta ainda ocupava espaço no flex; o cabeçalho tinha 113 px nos testes. | Cabeçalho com 93 px e menu posicionado abaixo, sem deslocar a página ao abrir. | `src/components/Header/Header.css` |
| Menu mobile | Botão pequeno, sem nome acessível nem indicação de estado; links mantinham o menu aberto. | Área de toque de 44 × 44 px; nome e estado acessíveis; fecha ao selecionar um link, tocar fora, pressionar Escape ou passar ao desktop. Escape devolve o foco ao botão. | `src/components/Header/Header.jsx` |
| Menu em paisagem | Não havia limite de altura para uma tela curta. | Menu com altura limitada ao espaço disponível e rolagem própria. | `src/components/Header/Header.css` |
| Navegação por âncoras | Não havia compensação do cabeçalho no mobile. A animação de entrada também deslocava o destino após a navegação. | Margem de 125 px, incluindo o deslocamento de 20 px da animação. | `src/index.css` |
| Apresentação inicial | Colunas apertadas em larguras intermediárias; título mobile de 24 px; estatísticas dependiam do tamanho mínimo dos textos. | Coluna única até 1024 px, conteúdo centralizado, título entre 30 e 40 px e estatísticas em três colunas que respeitam a largura disponível. | `src/components/Hero/Hero.css` |
| Fotos iniciais | Altura fixa para todas as telas e pausa de 40 × 40 px. | Altura adaptável entre 280 e 420 px; pausa de 44 × 44 px. Mantidas as oito fotos, a transição e o intervalo de três segundos. | `src/components/Hero/Hero.css` |
| Apresentação da Bárbara | A altura fixa de 250 px recortava o retrato; texto justificado criava espaços irregulares em linhas curtas. | Retrato preenchendo o quadro com `object-fit: cover`, sem faixas brancas, e texto justificado conforme solicitado. Colunas empilhadas também nos tamanhos intermediários. | `src/components/Professional/Professional.css` |
| Serviços | Cabeçalhos baixos e pouco espaço para conteúdo e botões nas telas estreitas. | Cabeçalhos com pelo menos 44 px, espaçamentos menores, seta sem encolher e botões que ocupam a largura disponível e permitem quebra de linha. | `src/components/Services/Services.css` |
| Sua jornada | Números podiam sair pela esquerda e ocupavam espaço no fluxo, estreitando os cartões. | Números posicionados ao lado da linha; cartões aproveitam o restante da largura; texto justificado conforme solicitado. | `src/components/Journey/Journey.css` |
| Chamada final | Botões e indicadores continuavam lado a lado; foi detectado transbordamento na página de 320 px. | Botões e indicadores empilhados, textos completos e áreas de toque maiores. | `src/components/CTA/CTA.css` |
| Rodapé | Mapa sem largura explícita no layout em coluna; pouco espaço inferior para o botão flutuante. | Mapa ocupando toda a largura disponível, espaçamentos corrigidos e margem inferior para permitir ler o crédito final acima do WhatsApp. | `src/components/Footer/Footer.css` |
| WhatsApp flutuante | Distância fixa das bordas. | Respeita também as áreas seguras inferior e direita informadas pelo dispositivo. | `src/components/WhatsAppButton/WhatsAppButton.css` |

## Testes executados

Playwright com Microsoft Edge/Chromium em modo headless. Celulares e tablets
foram emulados com viewport mobile e suporte a toque; não são aparelhos físicos.

| Grupo | Resoluções em pixels CSS | Resultado |
| --- | --- | --- |
| Celulares em retrato | 320×568, 360×640, 375×667, 390×844, 430×932 | Aprovado |
| Telas em paisagem | 568×320, 844×390 | Aprovado |
| Tamanhos intermediários | 768×1024, 820×1180, 1024×768 | Aprovado |
| Desktop | 1025×900, 1440×900, 1920×1080 | Aprovado |

Verificações realizadas:

- Ausência de rolagem horizontal e de elementos saindo pelas laterais, com menu
  fechado, aberto e com cada serviço expandido.
- Links Início, Serviços, Sua Jornada e Contato; fechamento do menu e posição
  dos destinos após terminar a animação de entrada.
- Fechamento por toque externo e Escape; mudança de retrato para paisagem e
  passagem pelo breakpoint desktop sem manter o menu indevidamente aberto.
- Abertura e fechamento dos seis serviços; tocar no texto não fecha o conteúdo;
  trocar de serviço mantém somente um aberto.
- Carregamento das oito fotos, ciclo completo com retorno à primeira, intervalo
  de três segundos, pausa e retomada por toque.
- Ativação de todas as seções durante a rolagem.
- Largura do contêiner do mapa e visibilidade do botão do formulário.
- Destinos dos links de serviços para WhatsApp.
- Abertura do Forms e do WhatsApp em nova aba por toque. Nesses testes, a
  navegação externa foi interceptada depois do clique: nenhum formulário ou
  mensagem foi enviado, e não se validou o recebimento na planilha.
- Ausência de exceções JavaScript da aplicação nos cenários concluídos.
- Inspeção visual de capturas mobile, incluindo topo, sequência de seções e rodapé.

A versão de produção (`npm run build` + `npm run preview`) também passou pelos
testes de carrossel, menu, mudança de orientação, serviços e abertura dos links.
`npm run lint`, `npm run build` e `git diff --check` passaram.

## Preservação do desktop

Uma cópia independente do commit `3748f88` foi comparada à versão alterada em
1025, 1440 e 1920 px. Depois de estabilizar as animações, as medidas das seções
e componentes selecionados, fontes computadas, cores, fundos e espaçamentos
foram iguais. Para tornar essa comparação determinística, os recursos externos
foram bloqueados igualmente nas duas versões. A comparação não equivale a uma
validação pixel a pixel com as fontes remotas carregadas.

## Limites e conferência antes da publicação

- Não houve execução em Android ou iPhone físicos, nem validação concluída em
  Safari/WebKit e Firefox. A instalação dos navegadores adicionais encontrou
  problemas de certificado e, após usar os certificados do sistema, download
  muito lento; foi interrompida. Isso não altera o projeto.
- O Google Maps respondeu à consulta HTTP com o endereço Rua Marina, 1325,
  Campestre, Santo André. Seu conteúdo visual não terminou de carregar na
  captura automatizada. O layout do iframe foi verificado, mas o carregamento
  e a interação do mapa ainda devem ser conferidos no aparelho real.
- O recebimento das respostas do Forms na planilha continua dependendo da
  confirmação da responsável pela clínica.

Roteiro de conferência em aparelho real: abrir o site, usar os quatro links do
menu, girar a tela, abrir os serviços, pausar e retomar as fotos, abrir os botões
do Forms e WhatsApp, conferir o mapa e ler o rodapé. Testar no Chrome/Android e
Safari/iPhone, incluindo as barras de navegação do navegador aparecendo e sumindo.

Não foram identificadas falhas remanescentes nos cenários automatizados
concluídos. Esses resultados não constituem garantia de ausência de erros em
todos os aparelhos e navegadores.

## Revisão solicitada após a validação inicial

Os parágrafos de todo o site e os textos dos cartões MOV para você foram
justificados, inclusive no desktop. Títulos e controles mantêm seu alinhamento.
A foto mobile passou de contain para cover para preencher o quadro sem sobras
brancas. A comparação de igualdade do desktop acima se refere à versão anterior
a essa alteração de alinhamento expressamente solicitada.

