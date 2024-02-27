CREATE PROCEDURE getAllReviewsByUser(@user_id VARCHAR(50))
AS
BEGIN
SELECT * FROM reviews
WHERE user_id = @user_id
END