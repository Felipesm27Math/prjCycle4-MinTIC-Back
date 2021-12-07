import mongoose from 'mongoose';
import {ProjectModel} from '../proyectos/proyecto.js';
import {UserModel} from '../usuarios/usuario.js';

const {Schema,model} = mongoose;

const advanceSchema = new Schema({
    proyecto:{
        type: Schema.Types.ObjectId,
        required:true,
        ref: ProjectModel,
    },
    fecha: {
        type: Date,
        required:true,
    },
    descripcion: {
            type: String,
            required:true,
    },
    observaciones:{
            type: String,
    },
    creadoPor: {
        type: Schema.Types.ObjectId,
        required:true,
        ref: UserModel,
    },
});

const AdvanceModel = model('avance',advanceSchema,'avances');
export {AdvanceModel};