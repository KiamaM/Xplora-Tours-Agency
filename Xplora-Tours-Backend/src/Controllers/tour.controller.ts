import { Request, Response } from "express"
import { v4 } from "uuid"
import Connection from "../DB-Helper/dbhelper"
import { tours } from "../Interfaces/tours"
import { any, string } from "joi"




//Create a new instance of the dbhelper class
const dbhelper = new Connection





export const createTour = async (req:Request, res:Response)=>{
 try {
    const id = v4()

    const{destination, category, start_date,end_date,price}:tours = req.body


    let result = await (dbhelper.execute('createTour', {
       tour_id:id ,destination, category, start_date,end_date,price
    }))

    if(result.rowsAffected[0] > 1){
        return res.json({
            error:'Tour creation failed'
        })
    }else{
        
    return res.json({
        message:'Tour created successfully',
        messages:result.recordset

    })
    }

 } catch (error:any) {
    return res.json({
        error:error.originalError.info.message
    })
 }
}








export const getTours = async(req:Request, res:Response)=>{
    try {

        let tours = (await (dbhelper.execute('getAllTours'))).recordset


        return res.json({
            tours: tours
        })
    } catch (error:any) {
        return res.json({
            error:error.originalError.info.message
        })
    }
}









export const getOneTour = async(req:Request, res:Response)=>{
    try {
        const id = req.params?.['id']

        let tour = (await dbhelper.execute("getOneTour", {tour_id:id})).recordset


        return res.json({
            tour
        })
    } catch (error) {
        return res.json(error)
    }
}







export const updateTour = async(req:Request, res: Response)=>{
    try {
        const id = req.params?.['id']

        const{destination, category, start_date,end_date,price}:tours = req.body

        const result = await dbhelper.execute("updateTour", {
            tour_id: id,
            destination:destination,
            category:category,
            start_date:start_date,
            end_date:start_date,
            price:price
        })

        console.log(result);
        

        return res.status(200).json({
            message: "Tour updated successfully"
        })


    } catch (error) {
        return res.status(500).json({ 
            error: "Internal Server Error" 
        });
    }
}


export const deleteTour = async(req:Request, res: Response)=>{
    try {
        const tour_id:any = req.params?.['id']

        const result = await dbhelper.execute("deleteTour",{tour_id})

        

        return res.status(200).json({
            message: "Tour deleted successfully"
        })


    } catch (error) {
        return res.status(500).json({ 
            error: "Internal Server Error" 
        });
    }
}




