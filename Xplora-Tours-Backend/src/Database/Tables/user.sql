DROP TABLE users
CREATE TABLE users(
    user_id VARCHAR(50) NOT NULL PRIMARY KEY, 
    first_name VARCHAR(50) NOT NULL, 
    last_name VARCHAR(50) NOT NULL, 
    email VARCHAR(100) NOT NULL UNIQUE, 
    password VARCHAR(250) NOT NULL,
    is_deleted BIT DEFAULT 0,
    is_welcomed BIT DEFAULT 0
);

DROP TABLE users

ALTER TABLE users
ADD is_deleted BIT DEFAULT 0

SELECT * FROM users WHERE is_deleted = 1

SELECT * FROM users 


ALTER TABLE users
DROP COLUMN is_deleted

ALTER TABLE users
ALTER COLUMN is_deleted user_deleted


ALTER TABLE users
ALTER COLUMN password VARCHAR(200);

ALTER TABLE users
DROP CONSTRAINT FK_tours_users;

ALTER TABLE users ADD is_welcomed BIT DEFAULT 0

UPDATE users SET is_welcomed = 0

ALTER TABLE users
ADD CONSTRAINT FK_tours_users FOREIGN KEY (user_id) REFERENCES tours(tour_id);

