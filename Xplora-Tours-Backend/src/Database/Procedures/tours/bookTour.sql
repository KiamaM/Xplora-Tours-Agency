CREATE OR ALTER PROCEDURE bookThisTour
    @booking_id VARCHAR(100), 
    @user_id VARCHAR(50), 
    @tour_id VARCHAR(50)
AS
    IF NOT EXISTS (SELECT * FROM users WHERE user_id=@user_id AND  is_deleted=0)
        BEGIN
            DECLARE @ErrorMsg VARCHAR(100) = 'User not found'
            RAISERROR(@ErrorMsg, 16, 1);
            RETURN;
        END
    ELSE IF NOT EXISTS (SELECT * FROM tours WHERE tour_id=@tour_id AND is_deleted=0)
        BEGIN
            DECLARE @ErrorMessage VARCHAR(100) = 'Tour not found'
            RAISERROR(@ErrorMessage, 16, 2);
            RETURN;
        END
    ELSE IF NOT EXISTS(SELECT * FROM bookings WHERE user_id=@user_id)
        BEGIN

            -- Insert a new record into bookings table
            INSERT INTO bookings (booking_id,user_id, tour_id, booking_date, is_canceled, is_booked)
            VALUES (@booking_id,@user_id, @tour_id, GETDATE(), 0, 1); -- booking_date defaults to current date and is_canceled defaults to 0  

        END
    ELSE
        BEGIN
            DECLARE @BookedErrorMessage VARCHAR(100) = 'Tour already booked'
            RAISERROR(@BookedErrorMessage, 16, 2);
            RETURN;
        END






SELECT * FROM bookings

    -- Retrieve the booking details
    SELECT
        b.booking_id, b.user_id, b.tour_id, b.booking_date, b.is_canceled, b.is_booked
    FROM 
        bookings b
    INNER JOIN 
        tours t ON t.tour_id = b.tour_id
    WHERE 
        b.tour_id = @tour_id;







    -- booking_id VARCHAR(100) NOT NULL PRIMARY KEY, 
    -- user_id VARCHAR(100) NOT NULL, 
    -- tour_id VARCHAR(100) NOT NULL, 
    -- booking_date DATETIME NOT NULL, 
    -- is_canceled BIT DEFAULT 0,
    -- is_booked BIT DEFAULT 0,