import express from "express";
const app = express();
app.use(express.json());

const client = new PrismaClient();


app.use("/" , (req , res)=>{
    res.json({
        message : "This is a healthy server , if you think so its not, its still a pretty healthy server"
    })
})
