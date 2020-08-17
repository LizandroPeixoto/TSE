-- Esquemas
CREATE SCHEMA IF NOT EXISTS LogPrevent
    AUTHORIZATION postgres;

-- Tabela pessoa
CREATE TABLE IF NOT EXISTS LogPrevent.logPrevent
(
    id integer NOT NULL,
    data timestamp with time zone,
    ip character(150) ,
    request character(50) ,
    status character(3) ,
    user_agent character(255) ,
    CONSTRAINT logPrevent_pkey PRIMARY KEY (id)
);

ALTER TABLE logPrevent.logPrevent
    OWNER to postgres;

-- Sequence logPrevent.logPrevent
CREATE SEQUENCE IF NOT EXISTS logPrevent.logPrevent_id_seq
    INCREMENT 1
    START 3
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE logPrevent.logPrevent_id_seq
    OWNER TO postgres;