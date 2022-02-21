# Aprenda o que são estrutura de dados e algoritmos

### Estruturas de Dados
Estrutura organizada de dados na memória de um computador ou em qualquer dispositivo de armazenamento, de forma que os dados possam ser utilizados de forma correta;

- **Vetores e Matrizes ou Arrays**
1. **Vetor ou array uni-dimensional:** Estrutura de dados simples; Muitas variáveis do mesmo tipo
2. **Matriz ou array multi-dimensional:** Vetor de vetores; Vetor que possui duas ou mais dimensões

- **Registro**
Fornece um formato especializado para armazenar informações em memória; 
Permite armazenar + de um tipo de dado;
Todo registro tem um nome (ex: livro) e seus campos podem ser acessados por meio do uso do operador ponto "." (ex: livro.preco; livro.nome)
![](https://sites.google.com/site/unipliconstrucaodealgoritmos/_/rsrc/1384132939558/aulas/aula-8---registros/algoritmo15.png)

- **Listas/Lists**
Armazena dados de um determinado tipo em uma ordem específica
_Listas x Arrays_: Listas possuem tamanho ajustável, enquanto arrays possuem tamanho fixo
**Tipos de Listas**
1. Ligadas
Unidirecional
![](https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/09/lista_com_dois_elementos.png)
2. Duplamente ligadas
Bidirecional
![](https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/09/lista_duplamente_ligada.png)

- **Pilhas/Stacks**
Serve como uma coleção de elementos, e permite o acesso a somente um item de dados armazenado
![](https://www.questoesestrategicas.com.br//imgs//?i=FyAsKcZ9NCKS2qUDAuYNqEuzwji4Ccm_J9rFw2qI4GM)
1. LIFO ou UEPS
Último que Entra, Primeiro que Sai;
O primeiro elemento a ser retirado é o último que tiver sido inserido;
![](https://www.embarcados.com.br/wp-content/uploads/2016/09/stack-representation.jpg)
![LIFO – Wikipédia, a enciclopédia livre](https://upload.wikimedia.org/wikipedia/commons/b/b4/Lifo_stack.png)
2. FIFO ou PEPS
Primeiro que Entra, Primeiro que Sai;
O primeiro elemento a ser retirado é o primeiro que tiver sido inserido;
![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fifo_queue.png/350px-Fifo_queue.png)

- **Filas/Queue**
O elemento removido é o que está na estrutura há mais tempo ou seja, o primeiro objeto inserido na fila é também o primeiro a ser removido seguindo o conceito FIFO.

- ** Arvore**
Organiza seus elementos de forma hierárquica, onde existe um elemento que fica no topo da árvore, chamado de raiz e existem os elementos subordinados a ele, que são chamados de nós/nodos ou folhas

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Tree.example.png/300px-Tree.example.png)

- **Tabela Hash**
Tabela de Hash de dispersão ou espelhamento;
Associa chaves de pesquisa a valores;
_Função Hashing_: espalha elementos, fazendo com que os mesmos fiquem de forma não ordenada dentro do "array" que defina a tabela
![tabela1](https://joaoarthurbm.github.io/eda/posts/hashtable/exemplo1.png)
[Mais sobre tabela Hash](https://joaoarthurbm.github.io/eda/posts/hashtable/)

- **Grafo**
Permitem programar a relação entre objetos;
Os objetos são vértices ou "nós" do garfo
Os relacionamentos são arestas.
![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/6n-graf.svg/220px-6n-graf.svg.png)
