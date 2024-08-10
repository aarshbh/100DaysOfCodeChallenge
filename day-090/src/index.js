// Can be imported in this way and shall bring the files to manage.
// require('dotenv').config({path: './env'});


import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at port : 
            ${process.env.PORT}`);
    })
})
.catch((err)=> {
    console.log("MONGO db connection failed !!! ", err);
})













// import express from "express";
// const app = express();
// ;(async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("ERROR",(error) => {
//             console.log("ERROR :",error);
//             throw error;
//         })
    
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         } )
    
//     } catch (error) {
//         console.error("ERROR",error)
//         throw err
//     }
// })()