import mongoose from 'mongoose';

const {Schema,model} = mongoose;
const userSchema = new Schema({
    correo:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator: (email) =>{
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: 'The email format is wrong',
        },
    },
    password:{
        type:String,
        required:true,
    },
    identificacion:{
        type:String,
        required:true,
        unique:true,
    },
    nombre:{
        type:String,
        required:true,
    },
    rol:{
        type:String,
        required:true,
        enum:['ESTUDIANTE','LIDER','ADMINISTRADOR'],
    },
    estado:{
        type:String,
        enum:['PENDIENTE','AUTORIZADO','NO_AUTORIZADO'],
        default:'PENDIENTE',
    }    
});

const UserModel = model('usuario',userSchema);

export {UserModel};