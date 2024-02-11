CREATE DATABASE futscript

\c futscript

CREATE TABLE positions (
    id SERIAL PRIMARY KEY,
    name VARCHAR (50) NOT NULL 
);

CREATE TABLE equipments(
    id SERIAL PRIMARY KEY,
    name  VARCHAR (50) NOT NULL
);

/* Esta table deberia hacerse alfinal, porque estamos haciendo referencia a la tabla equipment y positions */
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    equipments_id INT REFERENCES equipments(id),
    positions_id INT REFERENCES positions(id), 
    name VARCHAR (50) NOT NULL
);


INSERT INTO positions values
(DEFAULT, 'delantero'),
(DEFAULT, 'centrocampista'),
(DEFAULT, 'defensa'),
(DEFAULT, 'portero');


