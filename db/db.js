import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose.connect(process.env.DATABASE_URL).then(() =>{
      console.log('Conectado a la BD :D');
  })
  .catch((e) => {
      console.error('Error connection to db', e);
  });
};

 
export default connectDB;