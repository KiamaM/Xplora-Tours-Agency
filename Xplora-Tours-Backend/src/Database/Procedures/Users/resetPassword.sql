CREATE OR ALTER PROCEDURE resetPassword(
    @user_id VARCHAR(100),
    @first_name VARCHAR(200), 
    @last_name VARCHAR(200), 
    @email VARCHAR(200), 
    @password VARCHAR(100)
    )
AS
BEGIN 
UPDATE users SET password = @password 
WHERE email = @email 
END