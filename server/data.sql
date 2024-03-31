CREATE DATABASE capstonehangten;

CREATE TABLE users (
    user_id VARCHAR(250) PRIMARY KEY,
    user_email VARCHAR(250),
    user_name VARCHAR(250),
    user_age INT,
    hashed_password VARCHAR(250)
);

CREATE TABLE summary (
    summary_id INT PRIMARY KEY,
    user_id VARCHAR(250) FOREIGN KEY (user_id) REFERENCES (users),
    puzzles_solved_total INT,
    success_rate INT,
    word_puzzles INT FOREIGN KEY (word_id) REFERENCES (word_puzzles),
    place_puzzles INT FOREIGN KEY (place_id) REFERENCES (place_puzzles),
    random_puzzles INT FOREIGN KEY (random_id) REFERENCES (random_puzzles),
    phrase_puzzles INT FOREIGN KEY (phrase_id) REFERENCES (phrase_puzzles),
    food_and_drink_puzzles INT FOREIGN KEY (food_and_drink_puzzles) REFERENCES (food_and_drink_puzzles),
    jobs_puzzles INT FOREIGN KEY (jobs_puzzles_id) REFERENCES (jobs_puzzles)
);

CREATE TABLE word_puzzles (
    word_id INT PRIMARY KEY,
    word VARCHAR(250)
);

CREATE TABLE place_puzzles (
    place_id INT PRIMARY KEY,
    place VARCHAR(250)
);

CREATE TABLE phrase_puzzles (
    phrase_id INT PRIMARY KEY,
    phrase VARCHAR(250)
);

CREATE TABLE food_and_drink_puzzles (
    food_and_drink_id INT PRIMARY KEY,
    food_and_drink VARCHAR(250)
);

CREATE TABLE jobs_puzzles(
    jobs_puzzles_id INT PRIMARY KEY,
    job VARCHAR(250)
);

CREATE TABLE random_puzzles(
    random_id INT PRIMARY KEY,
    random VARCHAR(250)
);



CREATE TABLE body(
    body_id INT PRIMARY KEY,
    body_part BLOB
);

CREATE TABLE puzzle_state(
    state_id INT PRIMARY KEY,
    guess INT
);

CREATE TABLE results(
    result_id INT PRIMARY KEY,
    win VARCHAR(4),
    lose VARCHAR(6)
);

CREATE TABLE puzzles_solved_total(
    puzzles_solved_total_id INT PRIMARY KEY,
    word_solved INT,
    place_solved INT,
    random_solved INT,
    phrase_solved INT,
    food_and_drink_solved INT,
    jobs_solved INT
);

CREATE TABLE success_rate(
    success_id INT PRIMARY KEY,
    win_rate INT
);