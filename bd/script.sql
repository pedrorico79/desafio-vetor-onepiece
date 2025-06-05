

create database desafio;
use desafio;

create table jogador(
id int primary key auto_increment,
nome varchar(45) unique
);

create table jogo(
id int primary key auto_increment,
dificuldade varchar(7)
);

create table partida(
fkjogo int,
fkjogador int,
vida int,
pontuacao int,
constraint fk_jogador foreign key(fkjogador) references jogador(id),
constraint fk_jogo foreign key(fkjogo) references jogo(id),
constraint pk_partida primary key(fkjogo, fkjogador)
);

-- create table jogada(
-- fkjogo int,
-- fkjogador int,
-- pontuacao int,
-- constraint fk_partida_jogador foreign key(fkjogador) references jogador(id),
-- constraint fk_partida_jogo foreign key(fkjogo) references jogo(id),
-- constraint pk_jogada primary key(fkjogo, fkjogador)
-- );


insert into jogador (nome)
values		('João'),
			('Maria'),
            ('Pedro'),
            ('Joana'),
            ('Cristiane'),
            ('Ronaldo');
            
insert into jogo (dificuldade)
values		('facil'),
			('medio'),
            ('dificil'),
            ('facil');

-- talvez fazer outra tabela para dificuldade e ligar a fk

insert into partida (fkjogo, fkjogador, vida, pontuacao)
values		(1, 1, 2, 10),
			(1, 2, 0, 0),
            (1, 3, 1, 5),
            (2, 4, 0, 0),
            (2, 5, 2, 12),
            (2, 6, 3, 20),
            (3, 1, 2, 14),
            (3, 4, 1, 7),
            (3, 3, 3, 23),
            (4, 5, 0, 0),
            (4, 1, 2, 15),
            (4, 6, 3, 19);