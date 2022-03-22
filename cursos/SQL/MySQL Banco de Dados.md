# Banco de dados - Modelo Relacional
Banco de dados no modelo relacional - melhor na utilização de dados estáticos;  
Relacionar informações entre várias tabelas;  
Atomizar as informações;  
As chaves estrangeiras (foreign keys) permitem o relacionamento das tabelas;  
Uma tabela só pode ter uma primary key, mas pode ter múltiplas foreign keys;  

## Objetivos
1. Persistência de dados
2. Estruturação de dados
3. Retrato fiel da realidade 

## SGBD (Sistema de Gereciamento de Banco de Dados) 
Diferença de um SGBD para outras estruturas de armazenmanento:  
1. Regras para corretude -> maior garantia da integridade dos dados;
2. Acesso controlado pelo SGBD;

![](https://bookdown.org/labxss/coorte_adm2/sgbd.png)

### Representação dos dados e regras do mini-mundo
- Tabelas, colunas e linhas

## Benefícios de BDs relacionais
- Simplicidade na consulta
- Vasta utilização
- Dados estruturados
- Consistência dos dados

# SQL
Standard Query Language  
Linguagem padrão para trabalhar com banco de dados relacionais.

- [O que é SQL?](https://www.alura.com.br/artigos/o-que-e-sql)

# MySQL - Trabalhando com as suas primeiras tabelas
## Criando tabelas MySQL
CREATE TABLE 

```sql 
CREATE TABLE pessoa /*cria uma tabela chamada pessoa com os seguintes atributos:*/ (nome VARCHAR(20), nascimento DATE);
``` 

### Tipos 
|INT|VARCHAR()|DATETIME|
|-|-|-|
|Inteiro|String(qtd de caracteres)|Data|


### A_I - AUTO INCREMENT
Primary Key, id - identificador, Indice Primary;  
Necessário para uma tabela - sem ela a tabela não será funcional;  

## Inserir dados nas tabelas
INSERT INTO  
Deve-se indicar o nome da tabela e as colunas que serão preenchidas e seus respectivos valores

```sql
INSERT INTO pessoas (nome,nascimento) VALUES ('Ana', '1990-08-24');
```

## Selecionando dados
SELECT  
Definindo os campos visualizados

```sql
SELECT * FROM pessoas /* "*" siginifica 'all'*/
SELECT nome FROM pessoas /*so irá aparecer o atributo nome da tabela pessoas*/
SELECT nome,nascimento FROM pessoas 
```
## Atualizando dados
UPDATE  
Alterando as informações

```sql
UPDATE pessoas SET nome = 'Bia' /*atualiza o atributo nome para 'Bia', porém todos os registros vão ser alterados, para alterar um específico utilizamos a cláusula WHERE*/
```

## Cláusula WHERE
WHERE  
Define uma condição para nosso comando; Indica qual campo iremos utilizar

```sql
UPDATE pessoas SET nome = 'Bia' WHERE id=1; /*atualiza o id=1 para Bia*/
```
## Deletando dados
DELETE  
Deleta as informações selecionadas

```sql
DELETE FROM pessoas WHERE id=1;
```

### Boas práticas para prevenir deletar dados errados
```sql
SELECT * FROM pessoas WHERE id=1; /*primeiro verifica a informação se é realmente a que você deseja deletar*/
DELETE FROM pessoas WHERE id=1; /*depois da verificação, você pode deletar*/
```

## Ordenando dados
ORDER BY  
Ordena a forma como as informações são exibidas

DESC e ASC
```sql
SELECT * FROM pessoas ORDER BY nome /*ordena de forma alfabética de acordo com as informações que estão no atributo nome*/
SELECT * FROM pessoas ORDER BY nome DESC /*ordena de forma decrescente; o default é de forma crescente(ASC)*/
```
## Agrupando dados
GROUP BY  
Agrupa as informações de acordo com o critério selecionado

```sql
SELECT COUNT(qtd), GENERO FROM pessoas GROUP BY genero

UPDATE pessoas SET genero='F' WHERE id=1; /*para declarar strings deve estar em parênteses*/
SELECT COUNT(id), FROM pessoas GROUP BY  genero; /*conta quanto ids diferentes tem no genero; agrupou por genero e contou quantos f e m tem */
```

# MySql - Explorando relacionamentos com workbench
Command Line (MySQL Commmand Line Client);  
Operar o banco de dados via terminal;  

## Criando uma base de dados nova no terminal do MySQL
```sql
show databases;  
create database "nome";  
use "nome";  
show tables;  //mostra as tabelas que estão no BD
```

```sql
CREATE TABLE cursos (id_curso INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(10));
INSERT INTO cursos (nome) VALUES ('MySQL');
show tables
INSERT INTO cursos (nome) VALUES ('HTML');
INSERT INTO cursos (nome) VALUES ('CSS');
SELECT * FROM cursos;
UPDATE cursos SET nome='HTML 5' WHERE id_curso=2;
```

```sql
ALTER TABLE cursos ADD carga_horaria INT(2) AFTER nome; /*Altera a tabela, adicionando uma nova coluna com um novo campo chamado carga_horaria que recebe um numero inteiro de 2 digitos*/
UPDATE cursos SET carga_horaria=20; /*todos os cursos vao ficar com o campo carga horaria com 20;*/
UPDATE cursos SET carga_horaria=10 WHERE id_curso=2; /*o curso de HTML ficou com carga horaria de 10 hrs*/
```

## Deletando Tabelas e Databases
```sql
DROP TABLE cursos; /*deleta a tabela*/
DROP DATABASE dio_cursos; /*deleta a database*/
```

## Mesclando tabelas
INNER JOIN  
Permite a mescla entre tabelas

```sql
SELECT * FROM pessoas JOIN cursos ON pessoas.fk_cursos=cursos.id_cursos;
```

# MySQL - Consultas com Join

```sql
```
