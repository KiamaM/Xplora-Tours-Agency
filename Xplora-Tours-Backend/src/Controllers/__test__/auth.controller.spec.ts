import { Request, Response } from 'express';
import mssql from 'mssql';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { loginUser } from '../auth.controller';
import json from 'express';
//Login user test suite

describe('Login test cases', ()=>{
    let res:any


    //define json
    beforeEach(()=>{
        res = {
            status:jest.fn().mockReturnThis(),
            json:jest.fn().mockReturnThis()
        }
    })


    //test cases
    it('Successfully logs in a user and returns a token', 

        //define our login user function
        async()=>{
            //define our expected user for logins as we should not make calls to the backend
            //The check for the user is the first one from the returned array
            //Start with the returned user

            let expectedUser = {
                user_id: "0124b821-2337-4e19-82f5-d4de5219c1e0",
                first_name: "Daniel",
                last_name: "Muriithi",
                email: "muriithikiamad1+12@gmail.com",
                password: "$2b$05$3LAWTdNY5F3MyaB6ernEGuZcW9Kf4XYyW9ZNIQAAK2m6xMjJeL7TO",
                is_deleted: false,
                is_welcomed: true
            }

            //Once we have the expected user, we create our request to login the user

            const req = {
                body:{
                    email:expectedUser.email,
                    password:expectedUser.password
                }
            }

            //Spy on mssql

            jest.spyOn(mssql,'connect').mockResolvedValueOnce({
                request:jest.fn().mockReturnThis(),
                input:jest.fn().mockReturnThis(),
                execute:jest.fn().mockResolvedValueOnce({
                    recordset:[expectedUser]
                })
            } as never)

            //Once we have sent the email and password, we use bcrypt 
            //To compare passwords

            jest.spyOn(bcrypt,'compare').mockResolvedValueOnce(true as never)

            //Spy on jwt on the sign method with a hard coded mock token
            jest.spyOn(jwt, 'sign').mockReturnValueOnce('generated-token-ccdecdecec-xffccececc-xfsfcfc' as never)

            //Call the function
            await loginUser(req as Request, res)

            //Write assertions
            expect(res.json).toHaveBeenCalledWith({
                message:"Login success",
                token:'generated-token-ccdecdecec-xffccececc-xfsfcfc'
            })
        }
    )


    //Test validation
    test('Returns a validation error if email or password is empty',
            async()=>{
                const req = {
                    body:{
                        email: '',
                        password: ''
                }
            }

            await loginUser(req as Request, res)

            //Assertions
            expect(res.json).toHaveBeenCalledWith({
                error: "\"email\" is not allowed to be empty"
            })
        }
    )


    //Test if a user is not found

    test('Returns an error if email is not found i db',
        async()=>{
            const req ={
                body:{
                    email:'incorrectemail@gmail.com',
                    password:"1232344"
                }
            }

            //Spy on mssql

            jest.spyOn(mssql,'connect').mockResolvedValueOnce({
                request:jest.fn().mockReturnThis(),
                input:jest.fn().mockReturnThis(),
                execute:jest.fn().mockResolvedValueOnce({
                    recordset:[]
                })
            } as never)
            await loginUser(req as Request, res)

            expect(res.json).toHaveBeenCalledWith({
                error: "User not found"
            })
        }
    )

    //Handles incorrect password
    it('Returns an error for incorrect password', 

    //define our login user function
    async()=>{

        const req = {
            body:{
                email:'correct@gmail.com',
                password:'wrongpassword'
            }
        }

        //Spy on mssql
        jest.spyOn(mssql,'connect').mockResolvedValueOnce({
            request:jest.fn().mockReturnThis(),
            input:jest.fn().mockReturnThis(),
            execute:jest.fn().mockResolvedValueOnce({
                recordset:[{
                    email:'correct@gmail.com',
                    password:'hashedpassword-gccceceed-fscfccfc'
                }]
            })
        } as never)


        //Once we have sent the email and password, we use bcrypt 
        //To compare passwords

        jest.spyOn(bcrypt,'compare').mockResolvedValueOnce(false as never)


        //Call the function
        await loginUser(req as Request, res)

        //Write assertions
        expect(res.json).toHaveBeenCalledWith({
            message:"",
        })
    }
)
})