import { Router } from "express";
import { createTour, deleteTour, getOneTour, getTours, updateTour } from "../Controllers/tour.controller";


const tours_router = Router()


tours_router.post('/', createTour)
tours_router.get('/', getTours)
tours_router.put('/update/:id', updateTour)
tours_router.get('/:id', getOneTour)
tours_router.delete('/delete/:id', deleteTour)




export default tours_router