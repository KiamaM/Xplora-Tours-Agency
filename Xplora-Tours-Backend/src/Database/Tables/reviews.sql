CREATE TABLE reviews(
    review_id VARCHAR(50) NOT NULL PRIMARY KEY, 
    user_id VARCHAR(50) NOT NULL, 
    description VARCHAR(300) NOT NULL, 
    post_date DATETIME NOT NULL, 
    rating NUMERIC NOT NULL,
    is_deleted BIT DEFAULT 0
);

SELECT * FROM reviews

ALTER TABLE reviews ADD booking_id VARCHAR(50)




UPDATE reviews  SET is_deleted = 0