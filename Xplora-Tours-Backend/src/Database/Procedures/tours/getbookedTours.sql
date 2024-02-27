CREATE OR ALTER PROCEDURE getBookedTours
    @user_id VARCHAR(50)
AS
BEGIN 

SELECT * FROM bookings b
INNER JOIN tours t ON t.tour_id = b.tour_id
INNER JOIN users u ON u.user_id = b.user_id
WHERE b.user_id = @user_id

END



