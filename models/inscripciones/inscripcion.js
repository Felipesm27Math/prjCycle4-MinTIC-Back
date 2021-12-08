import mongoose from 'mongoose';
import {UserModel} from '../usuarios/usuario.js';
import { ProjectModel } from '../proyectos/proyecto.js';
const {Schema,model} = mongoose;

const inscriptionSchema = new Schema({
    estudiante: {
        type:Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    },
    proyecto: {
        type:Schema.Types.ObjectId,
        required: true,
        ref:ProjectModel,
    },
    estado: {
        type: String,
        enum: ['ACEPTADA','RECHAZADA','EN_ESPERA'],
        default: 'EN_ESPERA',
        required: true,
    },
    fechaIngreso: {
        type:Date,
    },
    fechaSalida:{
        type:Date,
    },
});

const InscriptionModel = model ('inscrito', inscriptionSchema,'inscritos');
export {InscriptionModel};