CREATE PROCEDURE updateUser(
    @user_id VARCHAR(100),
    @first_name VARCHAR(200), 
    @last_name VARCHAR(200), 
    @email VARCHAR(200), 
    @password VARCHAR(100))
AS
BEGIN
    UPDATE Users SET 
        first_name=@first_name, 
        last_name=@last_name, 
        email=@email, 
        password=@password
    WHERE user_id = @user_id
END