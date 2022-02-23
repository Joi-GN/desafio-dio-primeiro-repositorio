# Introdução a criação de websites com HTML5 e CSS3
## HTML
Linguagem de Marcação de HiperTexto  
Versão mais recente: HTML5 (2014)  

### **Elementos**  
Um elemento HTML é formado pela tag de abertura e seus atributos, o conteúdo e uma tag de fechamento.
![](https://slideplayer.com.br/slide/12934741/78/images/10/Estrutura+b%C3%A1sica+do+HTML5.jpg)

- [HTML básico](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [Elementos HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element)
- [HTML5 Introdução](https://slideplayer.com.br/slide/12934741/)

**< !DOCTYPE html >**
A primeira linha do documento deve ser o < !DOCTYPE html >, apesar de parecer um elemento HTML ela apenas diz ao navegador que ele está lidando com um arquivo do tipo HTML5. Os elementos HTML vem logo abaixo.

**< html >**
A tag html é a raiz do seu documento, todos os elementos HTML devem estar dentro dela. E nela nós informamos ao navegador qual é o idioma desse nosso documento, através do atributo lang, para o português brasileiro usamos pt-BR.

**< head >**
A tag head contém elementos que serão lidos pelo navegador, como os metadados - um exemplo é o charset, que é a codificação de caracteres e a mais comum é a UTF-8, o JavaScript com a tag script, o CSS através das tags style e link.

**< body >**
E dentro da tag body colocamos todo o conteúdo visível ao usuário: textos, imagens, vídeos.

### Semântica
Durante muitos anos o elemento padrão no HTML era a div, construíamos nosso conteúdo todo baseado nela. Mas em 2014 saiu a quinta versão do HTML, e com ela vieram vários mudanças importantes, como performance e acessibilidade.

A semântica nos permite descrever mais precisamente o nosso conteúdo, agora um bloco de texto não é apenas uma div, agora é um article e tem mais significado assim. E temos vários elementos para ressignificar as divs:

![](https://miro.medium.com/max/1400/1*NjJoYvshr5Jyj4HMu0aXnA.jpeg)

**< section >**
Representa uma seção genérica de conteúdo quando não houver um elemento mais específico para isso.

**< header >**
É o cabeçalho da página ou de uma seção da página e normalmente contém logotipos, menus, campos de busca.

**< article >**
Representa um conteúdo independente e de maior relevância dentro de uma página, como um post de blog, uma notícia em uma barra lateral ou um bloco de comentários. Um article pode conter outros elementos, como header, cabeçalhos, parágrafos e imagens.

**< aside >**
É uma seção que engloba conteúdos relacionados ao conteúdo principal, como artigos relacionados, biografia do autor e publicidade. Normalmente são representadas como barras laterais.

**< footer >**
Esse elemento representa o rodapé do conteúdo ou de parte dele, pois ele é aceito dentro de vários elementos, como article e section e até do body. Exemplos de conteúdo de um < footer > são informações de autor e links relacionados.

**< h1 >-< h6 >**
Eles não foram criados na versão 5 do HTML e nem são específicos para semântica, mas servem para esse propósito.   
São utilizados para marcar a importância dos títulos, sendo < h1 > o mais importante e < h6 > o menos. Uma dica: use apenas um < h1 > por página, pois ele representa o objetivo da sua página.
![](https://flaviomuniz.com.br/wp-content/uploads/2018/06/O-que-sao-h1-h2-e-h3.png)

### Textos e links
A criação do HTML foi motivada pela necessidade de compartilhar textos e documentos, e mesmo depois de quase 30 anos, com toda a evolução da web, isso ainda representa uma boa parte do conteúdo da web.

O **< p >** representa um parágrafo, mas ele não suporta apenas texto, podemos adicionar imagens, código, vídeos e vários outros tipos de conteúdo dentro dele.

Um outro elemento interessante e extremamente necessário na web é o **< a >** - que significa anchor/âncora, ele representa um hyperlink, é ele que interliga vários conteúdos e páginas na web.

O elemento a tem vários atributos, um deles são o **href** e o **target**.

O **href** representa o hyperlink para onde sua âncora aponta, pode ser uma página do seu ou de outro site, um e-mail e até mesmo um telefone, os dois últimos precisam dos prefixos mailto: e tel:, respectivamente.
ex: < a href="mailto:pessoa@mail.com" target="_blank">pessoa@mail.com< /a> 

O **target** neste momento vai servir para nos ajudar a abrir nossos links em outra aba do navegador usando o valor _blank.

### Imagens
A web também é feita de imagens e para representá-las temos o elemento **< img >**, ele é um daqueles elementos sem tag de fechamento.

O elemento **img** é bem simples, contendo apenas 2 atributos próprios, o **src** e o **alt**.

O **src** é obrigatório e guarda o caminho para a imagem que você quer mostrar na página.

O **alt** não é obrigatório mas é altamente recomendado por melhorar a acessibilidade, ele mostra a descrição da imagem caso ela não carregue e leitores de tela usam esse atributo para descrever a imagem para o usuário saber o que ela significa.
![](https://blog.betrybe.com/wp-content/uploads/2021/01/image-26.png)

### Listas
Listas servem para agrupar uma coleção de itens. Os elementos relacionados a listas são: **< ul >, < ol >** e **< li >**.

O elemento **ul** cria uma lista não ordenada, onde a ordem dos elementos não é importante, e é representada com pontos, círculos ou quadrados.

O **< ol >** serve para criar lista ordenadas, nessas a ordem importa, portanto elas são representadas com números, algarismos romanos ou letras.

E o elemento **li** é um item dentro de uma dessas listas. Um < li > pode conter vários tipos de conteúdos, como parágrafos, imagens e até outras listas.

![](https://www.w3docs.com/uploads/media/default/0001/01/3b29b697c81407acb8327bf06b9d1e0a8f98ac7a.png)

- [Tinypng - Site que remove dados desnecessários; comprime as imagens](tinypng.com)
- [HTML - W3schools](https://www.w3schools.com/html/default.asp)

## CSS
(Cascading Style Sheets ou Folhas de Estilo em Cascata)  
Linguagem de estilo;  
O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.

![](https://media.prod.mdn.mozit.cloud/attachments/2014/11/18/9461/012655e623bef579c9bd376e227bc648/css-declaration-small.png)

- [CSS Básico - MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/CSS_basics)  

Uma regra CSS é representada por um seletor ou um grupo de seletores, no caso acima é o < p >, então dentro de um par de chaves adicionamos as declarações, no exemplo acima estamos alterando cor para vermelho. Podemos colocar vários seletores em uma regra separando-os por vírgula.

>Cada linha de comando deve ser envolvida em chaves ({}).
>>Dentro de cada declaração, você deve usar dois pontos (:) para separar a propriedade de seus valores.
>>>Dentro de cada conjunto de regras, você deve usar um ponto e vírgula (;) para separar cada declaração da próxima.


### ID x Classe
O seletor que vimos no primeiro exemplo é um seletor de tipo, pois ele representa um elemento HTML, e com IDs e Classes podemos representar qualquer tipo de elemento mas há algumas diferenças entre eles:

**ID**: é representado pelo símbolo # (hash) seguido de um nome para esse ID.

**Classe**: a classe é representada de forma parecida do ID, mas é precedida por um ponto em vez do hash.

>ATENÇÃO!
>
>o ID só pode ser usado uma vez em uma página HTML enquanto a classe não tem restrições.

### Box-model
Quando estamos criando o layout de um site o navegador representa cada elemento HTML  como uma caixa retangular, isso é o box-model.  
E com CSS nós alteramos a aparência dessa caixa (largura, altura, cor de fundo, etc.) 
> Essa caixa é composta por 4 áreas: 
>1. Conteúdo (o que o seu bloco representa, um texto, uma imagem, um vídeo)
>2. Padding (espaçamento entre as bordas e o conteúdo, a diferença para as margens é que declarações de imagem de fundo funcionam nele)
>3. Borda
>4. Margem (espaçamentos entre elementos)

![](https://media.prod.mdn.mozit.cloud/attachments/2014/11/18/9443/63d72109948ccedb5e0f0dd5f9cb3716/box-model.png)

### Estilizando elementos
- [Estilizando textos - MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/Styling_text)
- [CSS layout - MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout)

**font-family**  
Com o font-family podemos alterar a fonte dos nossos textos, como uma fonte da internet ou uma que esteja instalada no nosso computador, mas vamos nos ater às fontes seguras, chamadas de web safe fonts.

Essas fontes são chamadas assim pois são encontradas em quases todos os sistemas e podem ser usadas sem preocupação. 

 - [**Web safe fonts**](https://www.w3schools.com/cssref/css_websafe_fonts.asp)

**font-size**  
O font-size nos ajuda a mudar o tamanho do texto.

**font-style**  
Usamos o font-style para tornar um texto itálico.

#### Border
Pode ter 3 valores: a largura, a cor e o estilo;  

A largura pode ser usada com várias unidades, como px, em e mm.   
A cor pode ser atribuída pelo nome ou por um código hexadecimal.   
O estilo é representada por palavras-chave, vamos ver algumas delas:

> 1. solid: mostra uma borda simples e reta;
> 2. dotted: são bolinhas com um pequeno espaçamento entre elas;
>3. dashed: forma uma linha tracejada.

Border-radius  
Permite arredondar os cantos de um elemento.  
Podemos usar várias unidades, mas as mais comuns são os pixels e a porcentagem.  
Colocar 50% na porcentagem, torna a borda redonda.

