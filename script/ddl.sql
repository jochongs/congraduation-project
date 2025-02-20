
database name
2000
100%
Table: 1

CREATE TABLE user_tb
(
  idx              int                      NOT NULL,
  background_color varchar                  NOT NULL DEFAULT #000000,
  img_path         varchar                  NOT NULL,
  created_at       timestamp with time zone NOT NULL DEFAULT NOW(),
  user_name        varchar                  NOT NULL,
  PRIMARY KEY (idx)
);