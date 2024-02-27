CREATE OR ALTER PROCEDURE deleteTour(@tour_id VARCHAR(100))
AS
BEGIN
    UPDATE tours SET is_deleted = 1 WHERE tour_id = @tour_id    
END