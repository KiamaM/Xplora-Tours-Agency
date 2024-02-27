CREATE TABLE bookings(
    booking_id VARCHAR(50) NOT NULL PRIMARY KEY, 
    user_id VARCHAR(50) NOT NULL, 
    tour_id VARCHAR(50) NOT NULL, 
    booking_date DATETIME NOT NULL, 
    is_canceled BIT DEFAULT 0,
    is_booked BIT DEFAULT 0,
);


DROP TABLE bookings

SELECT * FROM bookings

ALTER TABLE bookings
ALTER COLUMN user_id VARCHAR(50);



ALTER TABLE bookings
ADD CONSTRAINT FK_users_Bookings FOREIGN KEY (user_id) REFERENCES users(user_id);

UPDATE bookings SET is_canceled = 0

UPDATE bookings SET is_booked = 0


ALTER TABLE bookings
ADD CONSTRAINT FK_tours_Bookings FOREIGN KEY (tour_id) REFERENCES tours(tour_id);

ALTER TABLE bookings
ALTER COLUMN tour_id VARCHAR(50);

ALTER TABLE bookings
DROP CONSTRAINT FK_users_Bookings;
