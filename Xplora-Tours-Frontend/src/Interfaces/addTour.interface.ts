export interface addTour{
    destination:string
    category:string
    start_date:string
    end_date:string
    price:number
}

export interface updatedTour{
    destination:string
    category:string
    start_date:string
    end_date:string
    price:number
}

export interface Tour{
    tour_id:string
    destination:string
    category:string
    start_date:string 
    end_date:string
    price:number
    is_deleted:string
}
