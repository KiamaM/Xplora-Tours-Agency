CREATE OR ALTER PROCEDURE searchByCategory
    @category VARCHAR(100),
    @exactMatch BIT
AS
BEGIN
    IF @exactMatch = 1
    BEGIN
        SELECT * FROM tours WHERE category = @category
    END
    ELSE
    BEGIN
        -- Modify the query to handle non-exact matching if needed
        -- For example, if you want to search for categories containing the provided string
        SELECT * FROM tours WHERE category LIKE '%' + @category + '%'
    END
END
