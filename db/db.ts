import { connect } from "mongoose";

const connectDB = async () => {
  return await connect(
    'mongodb://felipe:q8rdraeYIf2JmPJH@cluster0-shard-00-00.ii5dv.mongodb.net:27017,cluster0-shard-00-01.ii5dv.mongodb.net:27017,cluster0-shard-00-02.ii5dv.mongodb.net:27017/nafcCodeBd?ssl=true&replicaSet=atlas-kbsscq-shard-0&authSource=admin&retryWrites=true&w=majority'
  ).then(() =>{
      console.log('Successful connection');
  })
  .catch((e) => {
      console.error('Error connection to db', e);
  });
};


export default connectDB;