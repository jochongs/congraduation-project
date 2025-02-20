CREATE USER con_admin WITH PASSWORD '1234';

CREATE DATABASE con OWNER con_admin;

\c con con_admin

CREATE TABLE user_tb
(
  idx              int                      NOT NULL GENERATED ALWAYS AS IDENTITY,
  background_color varchar                  NOT NULL DEFAULT '#000000',
  img_path         varchar                  NOT NULL,
  created_at       timestamp with time zone NOT NULL DEFAULT NOW(),
  user_name        varchar                  NOT NULL,
  expired_at       timestamp with time zone,
  PRIMARY KEY (idx)
);

ALTER TABLE user_tb
    ADD CONSTRAINT user_name_uniq UNIQUE NULLS NOT DISTINCT (user_name, expired_at);

INSERT INTO user_tb (img_path, user_name) VALUES ('/congraduation-00001.png', '테스트');
