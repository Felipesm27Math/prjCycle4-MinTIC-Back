import mongoose from 'mongoose';
import { UserModel } from "../usuarios/usuario.js";

const {Schema,model} = mongoose;

  const prjSchema = new Schema({
      nombre:{
          type:String,
          required:true,
          unique:true,
      },
      presupuesto:{
          type: Number,
          required:true,
      },
      fechaInicio:{
          type:Date,
          required:true,
      },
      fechaFin:{
          type: Date,
          required:true,
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
  });

  const ProjectModel = model('proyecto',prjSchema,'proyectos');
  export {ProjectModel};