import { PrismaClient } from "@prisma/client";
import express from "express"
const app = express;
app.use(express.json());

const client = new PrismaClient();


app.get("/" , (req , res)=>{
    res.json({
        message : "This is a healthy server , if you think so its not, its still a pretty healthy server"
    })
})


app.post("/" ,async (req ,res)=>{
    await client.user.create({
        data : {
            name  : req.body.name
        }
    })

})
