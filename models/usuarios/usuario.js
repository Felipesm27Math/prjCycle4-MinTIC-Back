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
},{
        toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
        toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
         
});

userSchema.virtual('proyectosLiderados', {
    ref: 'proyecto',
    localField: '_id',
    foreignField: 'lider',
  });
  
  userSchema.virtual('avancescreados', {
    ref: 'avance',
    localField: '_id',
    foreignField: 'lider',
  });
  
  userSchema.virtual('inscripciones', {
    ref: 'inscrito',
    localField: '_id',
    foreignField: 'estudiante',
  });

const UserModel = model('usuario',userSchema);

export {UserModel};