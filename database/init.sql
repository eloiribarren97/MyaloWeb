CREATE TYPE estadoAct as enum(pendiente, en progreso, finalizado);

CREATE TABLE task(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  estado estadoAct
);