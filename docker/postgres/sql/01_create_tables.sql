CREATE TABLE category (
    id serial PRIMARY KEY,
    name character varying(64)
);

CREATE TABLE product (
    id serial PRIMARY KEY,
    name character varying(255) DEFAULT NULL::character varying,
    description text DEFAULT NULL::character varying,
    category_id integer NOT NULL
);

