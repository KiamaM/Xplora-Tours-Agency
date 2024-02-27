import { Router } from "express";
import { addReview, getAllReviews, getAllReviewsByUser } from "../Controllers/reviews.controller";

const review_router = Router()


review_router.post('/', addReview)
review_router.get('/tourReviews/:id', getAllReviews)
review_router.get('/:id', getAllReviewsByUser)



