import dotenv from 'dotenv'
import { sqlConfig } from '../Config/sqlConfig'
import ejs from 'ejs'
import { sendMail } from '../Helpers/email.helper'
import mssql from 'mssql';


dotenv.config()

export const welcomeUser = async()=>{
    const pool = await mssql.connect(sqlConfig)

    const users = (await pool.request().query('SELECT * FROM Users WHERE is_welcomed = 0 and is_deleted = 0')).recordset

    console.log(users);
    
    for(let user of users){
        ejs.renderFile('Templates/welcomeUsers.ejs', {CustomerName: user.name}, async(error, data:any)=>{
            let mailOptions = {
                from: "muriithikiamad1@gmail.com",
                to: user.email,
                subject: "Welcome to Xplora",
                html: data
            }

            try {
                await sendMail(mailOptions)

                await pool.request().query('UPDATE Users SET is_welcomed = 1 WHERE is_welcomed = 0 AND is_deleted = 0')

                

                console.log("Emails send to new users");
                
            } catch (error) {
                console.log(error);
            }
        })
    }
}

