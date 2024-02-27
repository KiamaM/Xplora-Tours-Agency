CREATE OR ALTER PROCEDURE createTour(
    @tour_id VARCHAR(50), 
    @destination VARCHAR(100), 
    @category VARCHAR(100), 
    @start_date DATETIME, 
    @end_date DATETIME,
    @price NUMERIC
    )
AS
BEGIN
INSERT INTO tours(tour_id, destination, category, start_date,end_date,price)
VALUES(@tour_id, @destination, @category, @start_date,@end_date,@price)
END

SELECT * FROM tours