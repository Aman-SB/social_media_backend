import dotenv from "dotenv";
import connectDb from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.on("Error || " , (error) => {
        console.log('Error in MONGOOSE CONNECTION || ' , error);
        throw error;
    })

    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is runing at port : ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log("Monogo Db connection failed || ", err);
  });





// import express from "express";
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error: ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening o port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Error: ", error);
//     throw error;
//   }
// })();
