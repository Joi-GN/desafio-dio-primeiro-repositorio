# Primeiros passos com .NET
Uma aplicação .NET é desenvolvida para e roda em uma das seguintes implementações do .NET:
1. .NET Core /.NET;
2. .NET Framework;
3. Mono;
4. Universal Windows Plataform (UWP).

Cada implementação inclui um ou mais .NET Runtimes (ambientes de execução):
1. .NET Core: CoreCLR e CoreRT;
2. .NET Framework: CLR;
3. Mono: Mono Runtime;
4. UWP: .NET Native;

![](https://www.brunobrito.net.br/content/images/2019/05/dotnet5_platform.png)

## Conhecendo o CLI do .NET
Processa os comandos que serão enviados para um programa de cocmputador na forma de linhas de texto

```h
dotnet --version //mostra a versão do dotnet instalada;
dotnet --help //lista comandos;
dotnet --info //informações do .net instalado;
dotnet new //cria um novo projeto; além do comando new deve-se adicionar no comando o tipo de projeto que deseja criar;
dotnet new --h //help do comando new
dotnet new --list --tag web //filtra quais tipos de projetos são para web;
dotnet new console -n myApp //cria um novo projeto do tipo console de nome myApp;
dotnet run //roda o projeto //para rodar o projeto é necessário estar no diretório do projeto;
dotnet build //compila o projeto;
dotnet restore //resgata dependencias para que o projeto funcione;
```
```h
explorer . //abre o explorer na pasta 
code . //abre o vscode na pasta onde estamos
```

- [CLI do .NET](https://docs.microsoft.com/pt-br/dotnet/core/tools/)

## O que é o C#
É uma linguagem de programação moderna, orientada a objeto e de tipo seguro.
- Fortemente tipada
- Sintaxe similar a do C, C++ ou Java
- Suporta os conceitos de encapsulamento, herança e polimorfismo (OO);

>Programas C# são executados no .NET
>Compilador Roslyn

## Como Funciona?
O código-fonte escrito em C# é compilado em uma linguagem intermediária (IL);  
O código e os recursos de IL são armazenados no disco em um arquivo executável chamado assembly, geralmente com uma extensão .exe ou .dll;  
Quando executado, o assembly é carregado no CLR (Common language runtime);  
O CLR executará a compilação *just in time*(JIT) para converter o código IL em instruções de máquinas nativas.

>Outros serviços do CLR:
>- Garbage Collector
>- Exception Handler
>- Resources Manager

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/CLR_diag.svg/1200px-CLR_diag.svg.png)

## Estrutura de programa
Principais conceitos organizacionais:
- programas
- namespaces
- tipos
- membros
- assemblies

Os programas declaram tipos, que contêm membros e podem ser organizados em namespaces;  
Classes e interfaces são exemplos de tipos;  
Campos, métodos, propriedades e eventos são exemplos de membros;  

- [Um tour do C#](https://docs.microsoft.com/pt-br/dotnet/csharp/tour-of-csharp/)

## Variáveis
### Tipos de valor
Variáveis de tipo valor contem diretamente seus dados;

> Numéricos: sbyte, short, int, long, byte, ushort, uint, ulong  
> Caracteres Unicode: char
> Pontos flutuantes: float, double, decimal
> Booleano: bool
> Outros: enum, struct, nullable

### Tipos de referência
Variáveis de tipo de referência armazenam referências a seus dados;

> Tipos Classe: class, object, string
> Tipos Array: int[], int[,]
> interface, delegate

## Instruções
Ações de um programa são expressas usando instruções;  

> if, switch, while, do, for, foreach, break, continue, return, throw, try..catch..finally, using

## Array
Estrutura de dados que contém um número X de elementos, todos do mesmo tipo, que são acessados através de índices computados;  
Ao criar um array é definido o tamanho da nova instância que é fixo durante todo o tempo de vida da instância;

## Classes
Estrutura de dados que combina estado (campos) e ações (métodos);  
Suportam herança e polimorfismo, mecanismo pelos quais as classes derivadas podem estender e especializar as classes bases;

## Objetos
Instâncias de uma classe;  
São criadas utilizando o operador `new`




- [Material de apoio - Repoitório](https://github.com/gabrielfaraday/csharp-examples)