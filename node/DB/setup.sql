set client_encoding = 'UTF8';

create table IF NOT EXISTS sample(
  id serial primary key,
  message varchar(100)
);

CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  genre VARCHAR(100),
  description TEXT,
  published_date DATE
);

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";  
CREATE TABLE IF NOT EXISTS users(
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name varchar(50),
  email VARCHAR(200),
  phone_number BIGINT,
  password CHAR(60),
  created_at Date NOT NULL DEFAULT CURRENT_DATE,
  updated_at Date NOT NULL DEFAULT CURRENT_DATE,
  is_admin boolean DEFAULT false
);

-- INSERT INTO books (title, author, genre, description, published_date) VALUES ('To Kill a Mockingbird', 'Harper Lee', 'Fiction', 'A novel about the serious issues of rape and racial inequality.', '1960-01-01'),('1984', 'George Orwell', 'Dystopian', 'A novel that explores the dangers of totalitarianism.', '1949-01-01'),('Moby Dick', 'Herman Melville', 'Adventure', 'The narrative of Captain Ahabs obsessive quest to kill Moby Dick.', '1851-01-01'),('Pride and Prejudice', 'Jane Austen', 'Romance', 'A classic novel about manners, marriage, and social standing.', '1813-01-01'),('The Great Gatsby', 'F. Scott Fitzgerald', 'Tragedy', 'A novel that explores themes of wealth, love, and the American Dream.', '1925-01-01');

-- psql -h localhost -U postgres -d postgres -p 5432