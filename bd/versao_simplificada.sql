create database desafio;
use desafio;

create table usuario(
id int primary key auto_increment,
nome varchar(45),
pontuacao int
);

insert into usuario (nome, pontuacao)
values		('Cristiano', 30),
			('Paula', 23),
            ('Joana', 0),
            ('Ronaldo', 18);