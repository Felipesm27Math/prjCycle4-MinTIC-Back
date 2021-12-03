import { Schema,model } from "mongoose";
import {Enum_Rol,Enum_EstadoUsuario} from '../enums/enums';

interface User {
    nombre:string;
    //password:string;
    correo: string;
    identificacion:string;
    rol:Enum_Rol;
    estado:Enum_EstadoUsuario;
}

const userSchema = new Schema<User>({
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
        enum:Enum_Rol,
    },
    estado:{
        type:String,
        enum:Enum_EstadoUsuario,
        default:Enum_EstadoUsuario.PENDIENTE,
    }    
});

const UserModel = model('usuario',userSchema,'usuarios');

export {UserModel};