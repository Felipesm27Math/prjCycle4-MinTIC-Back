import mongoose from 'mongoose';
import {ProjectModel} from '../proyectos/proyecto.js';
import {UserModel} from '../usuarios/usuario.js';

const {Schema,model} = mongoose;

const advanceSchema = new Schema({
    proyecto:{
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
    },
    fecha: {
        type: Date,
    },
    descripcion: {
            type: String,
    },
    observaciones:{
            type: String,
    },
});

const AdvanceModel = model('avance',advanceSchema);
export {AdvanceModel};