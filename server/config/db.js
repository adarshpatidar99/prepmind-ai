import mongoose from "mongoose";

const dbConnection = async() => {

  await mongoose.connect(process.env.MONGO_URI, {
    dbName: "PrepMind-Ai"
  }).then(() => {
    console.log('Database connected Successfully');
  }).catch((error) => {
    console.log(`Some error occured while connecting database : ${error}`);
  })
}
      
export default dbConnection;       