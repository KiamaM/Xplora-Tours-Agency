CREATE OR ALTER PROCEDURE getALLUsers
AS
BEGIN 
SELECT * FROM users WHERE is_deleted = 0
END