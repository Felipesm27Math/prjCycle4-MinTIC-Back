import {Schema,model} from 'mongoose';
import { Enum_EstadoInscripcion } from '../enums/enums';
import {UserModel} from '../usuarios/usuario';
import { ProjectModel } from '../proyectos/proyecto';

interface Inscription {
    estudiante: Schema.Types.ObjectId;
    proyecto: Schema.Types.ObjectId;
    fechaIngreso: Date;
    fechaSalida: Date;
    estado: Enum_EstadoInscripcion;
}

const inscriptionSchema = new Schema<Inscription>({
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
        enum: Enum_EstadoInscripcion,
        default: Enum_EstadoInscripcion.ESPERA,
        required: true,
    },
    fechaIngreso: {
        type:Date,
        required: true,
    },
    fechaSalida:{
        type:Date,
    },
});

const InscriptionModel = model ('inscrito', inscriptionSchema,'inscritos');
export {InscriptionModel};