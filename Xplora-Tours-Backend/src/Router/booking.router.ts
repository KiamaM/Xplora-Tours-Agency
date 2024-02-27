import { Router } from "express";
import { bookTour, cancelTour, getAllUserBookings } from "../Controllers/bookings.controller";

const booking_router = Router()


booking_router.post('/', bookTour)
booking_router.put('/:id', cancelTour)
booking_router.get('/:id', getAllUserBookings)



export default booking_router

