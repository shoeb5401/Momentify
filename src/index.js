import dotenv from "dotenv";

import connectDB from "./db/db.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at :${process.env.PORT}`);
      app.on("error", (error) => {
        console.error("Error in Server Connection");
        throw error;
      });
    });
  })
  .catch((err) => {
    console.log(`MongoDB connection failed !!!`, err);
  });
// ONE-Approach

// import express from "express";
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log(("error", error));
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port: ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Error in db connection", error);
//     throw error;
//   }
// })();

//
