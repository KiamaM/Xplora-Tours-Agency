CREATE OR ALTER PROCEDURE getOneTour(@tour_id VARCHAR(100))
AS
BEGIN   
    SELECT * FROM bookings WHERE user_id = @user_id
END