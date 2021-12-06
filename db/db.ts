import { connect } from "mongoose";

const connectDB = async () => {
  return await connect(process.env.DATABASE_URL).then(() =>{
      console.log('Conexion exitosa :D');
  })
  .catch((e) => {
      console.error('Error coneccion a la bd :( ', e);
  });
};

 
export default connectDB;