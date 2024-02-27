CREATE PROCEDURE getAllReviews(@booking_id VARCHAR(50))
AS
BEGIN
SELECT * FROM reviews
WHERE booking_id = @booking_id
END