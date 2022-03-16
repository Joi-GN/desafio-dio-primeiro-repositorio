CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(20) NOT NULL,
    nascimento DATE
)

INSERT INTO pessoas (nome, nascimento) VALUES ('Paula', '1990-12-21')
INSERT INTO pessoas (nome, nascimento) VALUES ('Mauro', '1999-10-01')
INSERT INTO pessoas (nome, nascimento) VALUES ('Ana', '1989-03-24')
