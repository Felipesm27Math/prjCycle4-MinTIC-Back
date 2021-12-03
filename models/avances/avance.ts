import {Schema,model} from 'mongoose';
import {ProjectModel} from '../proyectos/proyecto';
import {UserModel} from '../usuarios/usuario';

interface Advance {
    proyecto: Schema.Types.ObjectId;
    fecha: Date;
    descripcion: string;
    observaciones:[string];
    creadoPor: Schema.Types.ObjectId;
}

const advanceSchema = new Schema<Advance>({
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
    observaciones: [
        {
            type: String,
        },
    ],
    creadoPor: {
        type: Schema.Types.ObjectId,
        required:true,
        ref: UserModel,
    },
});

const AdvanceModel = model('avance',advanceSchema,'avances');
export {AdvanceModel};