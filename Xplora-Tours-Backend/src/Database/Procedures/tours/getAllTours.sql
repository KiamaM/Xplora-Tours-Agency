CREATE OR ALTER PROCEDURE getAllTours 
AS
BEGIN
SELECT * FROM tours WHERE is_deleted = 0 
END






