CREATE PROCEDURE addReview(
    @review_id VARCHAR(50), 
    @user_id VARCHAR(50), 
    @description VARCHAR(300), 
    @post_date DATETIME, 
    @rating NUMERIC,
    @is_deleted BIT 
    )
AS
BEGIN
INSERT INTO reviews(review_id, user_id,description, post_date, rating, is_deleted)
VALUES(@review_id, @user_id,@description, @post_date, @rating, @is_deleted)
END

SELECT * FROM reviews