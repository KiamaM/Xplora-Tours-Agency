import { Request, Response } from "express"
import { v4 } from "uuid"
import Connection from "../DB-Helper/dbhelper"
import { reviews } from "../Interfaces/reviews"




//Create a new instance of the dbhelper class
const dbhelper = new Connection





export const addReview = async (req:Request, res:Response)=>{
 try {
    const id = v4()

    const{description, rating}:reviews = req.body


    let result = await (dbhelper.execute('addReview', {
       review:id ,description, rating
    }))

    if(result.rowsAffected[0] > 1){
        return res.json({
            error:'Could not add review'
        })
    }else{
        
    return res.json({
        message:'Review added successfully',
    })
    }

 } catch (error:any) {
    return res.json({
        error:error.originalError.info.message
    })
 }
}






export const getAllReviewsByUser = async(req:Request, res:Response)=>{
    try {
        const id = req.params.id

        let userReviews = await dbhelper.execute("getAllReviewsByUser", {user_id:id})


        return res.json({
            userReviews
        })
    } catch (error) {
        return res.json(error)
    }
}



export const getAllReviews = async(req:Request, res:Response)=>{
    try {
        const id = req.params.id

        let review = await dbhelper.execute("getAllReviews", {booking_id:id})


        return res.json({
            review
        })
    } catch (error) {
        return res.json(error)
    }
}







