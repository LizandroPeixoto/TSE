-- Esquemas
CREATE SCHEMA IF NOT EXISTS pessoa
    AUTHORIZATION postgres;

-- Tabela pessoa
CREATE TABLE IF NOT EXISTS pessoa.pessoa
(
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    CONSTRAINT pessoa_pkey PRIMARY KEY (id)
);

ALTER TABLE pessoa.pessoa
    OWNER to postgres;

-- Sequence pessoa.pessoa
CREATE SEQUENCE IF NOT EXISTS pessoa.pessoa_id_seq
    INCREMENT 1
    START 3
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE pessoa.pessoa_id_seq
    OWNER TO postgres;