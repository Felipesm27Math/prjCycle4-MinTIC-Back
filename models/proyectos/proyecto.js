import mongoose from 'mongoose';
import { UserModel } from "../usuarios/usuario.js";

const {Schema,model} = mongoose;

  const prjSchema = new Schema({
      nombre:{
          type:String,
          required:true,
      },
      presupuesto:{
          type: Number,
          required:true,
      },
      fechaInicio:{
          type:Date,
      },
      fechaFin:{
          type: Date,
      },
      estado:{
          type:String,
          enum:['ACTIVO','INACTIVO'],
          default:'INACTIVO',
      },
      fase:{
          type:String,
          enum:['INICIADO','DESARROLLO','TERMINADO','NULO'],
          default:'NULO',
      },
      lider:{
          type: Schema.Types.ObjectId,
          required:true,
          ref: UserModel,
      },
      objetivos:[
          {
            descripcion: {
                type:String,
                required:true,
            },
                tipo: {
                    type:String,
                    required:true,
                    enum: ['GENERAL','ESPECIFICO'],
                },
            },
      ],
  },{
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
  }
  );

  prjSchema.virtual('avances', {
    ref: 'avance',
    localField: '_id',
    foreignField: 'proyecto',
  });
  
  prjSchema.virtual('inscripciones', {
    ref: 'inscrito',
    localField: '_id',
    foreignField: 'proyecto',
  });




  const ProjectModel = model('proyecto',prjSchema);
  export {ProjectModel};