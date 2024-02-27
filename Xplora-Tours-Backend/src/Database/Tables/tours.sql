CREATE TABLE tours(
    tour_id VARCHAR(50) NOT NULL PRIMARY KEY, 
    destination VARCHAR(100) NOT NULL, 
    category VARCHAR(100) NOT NULL, 
    start_date DATETIME NOT NULL, 
    end_date DATETIME NOT NULL,
    price NUMERIC NOT NULL,  
    status VARCHAR(50) DEFAULT 'pending'  
);

SELECT * FROM tours

ALTER TABLE tours
ADD customer_id VARCHAR(50)

ALTER TABLE tours
ADD is_booked BIT DEFAULT 0

ALTER TABLE tours
DROP COLUMN user_id 

ALTER TABLE tours
ADD user_id VARCHAR(100)

ALTER TABLE tours
DROP COLUMN is_deleted 

ALTER TABLE tours
DROP CONSTRAINT FK_users_tours;


UPDATE tours SET is_booked = 0

SELECT * FROM tours WHERE is_deleted = 1

ALTER TABLE tours
ADD CONSTRAINT FK_user_tours FOREIGN KEY (tour_id) REFERENCES users(user_id);





