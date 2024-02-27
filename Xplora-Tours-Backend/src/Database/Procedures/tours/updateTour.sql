CREATE PROCEDURE updateTour(
    @tour_id VARCHAR(50), 
    @destination VARCHAR(100), 
    @category VARCHAR(100), 
    @start_date DATETIME, 
    @end_date DATETIME,
    @price NUMERIC)
AS
BEGIN
    UPDATE tours SET 
    tour_id =@tour_id, 
    destination =@destination, 
    category =@category, 
    start_date= @start_date, 
    end_date =@end_date,
    price =@price 
    WHERE tour_id = @tour_id
END