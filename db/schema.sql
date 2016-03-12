DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
       movie_id SERIAL PRIMARY KEY UNIQUE,
       poster text,
       title text,
       year integer,
       rated text,
       director text,
       actors text,
       plot text,
       showtime_id text
);

CREATE TABLE showtime (
       showtime_id SERIAL PRIMARY KEY,
       movie_id INTEGER REFERENCES movies,
       theater_id INTEGER REFERENCES theater,
       showtime DATE
);

CREATE TABLE theater (
       theater_id SERIAL PRIMARY KEY,
       theater_name text
);
