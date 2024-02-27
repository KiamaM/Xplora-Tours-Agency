import { Request, Response } from "express"
import { v4 } from "uuid"
import Connection from "../DB-Helper/dbhelper"
import { booking } from '../Interfaces/bookings';




//Create a new instance of the dbhelper class
const dbhelper = new Connection




export const bookTour = async(req:Request, res: Response)=>{
    try {
        const booking_id = v4()

        const{user_id,tour_id}:booking = req.body


        const result =  (await dbhelper.execute("bookThisTour", {booking_id,user_id, tour_id})).rowsAffected

        console.log(result);

        if(result.length > 1){
            return res.json({
                error:'Tour already booked'
            })
        }else{
            
            return res.status(200).json({
                message: "Tour booked successfully"
            })
        }        



    } catch (error:any) {        
        return res.status(500).json({ 
            // error: "Internal Server Error" 
            error:error.message
        
        });
        
    }
}


export const cancelTour = async(req:Request, res: Response)=>{
    try {
        const id = req.params?.['id']

        const{user_id, tour_id, booking_date, is_canceled,is_booked} = req.body

        const result = await dbhelper.execute("cancelTour", {
            booking_id:id, 
            user_id:user_id, 
            tour_id:tour_id, 
            booking_date:booking_date, 
            is_canceled:is_canceled,
            is_booked:is_booked
        })

        console.log(result);
        

        return res.status(200).json({
            message: "Booking cancelled successfully"
        })


    } catch (error) {
        return res.status(500).json({ 
            error: "Internal Server Error" 
        });
    }
}



export const getAllUserBookings = async(req:Request, res:Response)=>{
    try {

        const user_id = req.params.id

        let tours = (await (dbhelper.execute('getBookedTours',{user_id}))).recordset


        return res.json({
            tours: tours
        })
    } catch (error:any) {
        return res.json({
            error:error.originalError.info.message
        })
    }
}









export const getOneBooking = async(req:Request, res:Response)=>{
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







// export const updateBooking = async(req:Request, res: Response)=>{
//     try {
//         const id = req.params?.['id']

//         const{destination, category, start_date,end_date,price}:tours = req.body

//         const result = await dbhelper.execute("updateTour", {
//             tour_id: id,
//             destination:destination,
//             category:category,
//             start_date:start_date,
//             end_date:start_date,
//             price:price
//         })

//         console.log(result);
        

//         return res.status(200).json({
//             message: "Tour updated successfully"
//         })


//     } catch (error) {
//         return res.status(500).json({ 
//             error: "Internal Server Error" 
//         });
//     }
// }


export const deleteBooking = async(req:Request, res: Response)=>{
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

