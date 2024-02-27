INSERT INTO bookings
SELECT
b.booking_id, b.user_id, b.tour_id, b.booking_date,b.is_canceled,b.is_booked
FROM bookings b
INNER JOIN users u ON u.user_id = b.user_id
INNER JOIN tours t ON t.tour_id = b.tour_id
