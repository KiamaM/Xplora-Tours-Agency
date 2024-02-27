export interface loginUserDetails{
    user_id: string,
    first_name:string
    last_name:string
    email:string
    password:string  
    isWelcomed: boolean,
}

export interface Users{
    user_id: string,
    first_name:string
    last_name:string
    email:string
    is_deleted:Boolean
}

export interface updatedUserDetails{
    user_id: string,
    first_name:string
    last_name:string
    email:string
    password:string  
    isWelcomed: boolean,
}




