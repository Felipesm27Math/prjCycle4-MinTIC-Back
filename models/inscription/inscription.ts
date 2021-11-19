import {Schema,model} from 'mongoose';
import { Enum_EstadoInscripcion } from '../enums/enums';
import {UserModel} from '../users/user';
import { ProjectModel } from '../project/project';

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
        required: true,
    }
});

const InscriptionModel = model ('inscrito', inscriptionSchema,'inscritos');
export {InscriptionModel};