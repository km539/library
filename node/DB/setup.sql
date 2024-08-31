set client_encoding = 'UTF8';

create table IF NOT EXISTS sample(
  id serial primary key,
  message varchar(100)
)
