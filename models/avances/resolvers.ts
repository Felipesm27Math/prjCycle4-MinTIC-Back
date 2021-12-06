import { Query } from "mongoose";
import { AdvanceModel } from "./avance";

const resolversAvance = {
    Query:{
        /* tipos de consultas que voy a realizar */
        Avances: async (parent,args) =>{
            const avances = await AdvanceModel.find().populate('proyecto').populate('creadoPor');
            return avances;
        },
        BuscarAvances: async (parent,args) => {/* el pupulate me trae todos los campos de las relaciones se maneja generalmente con id */
            const avanceBuscado = await AdvanceModel.find({proyecto: args._id}).populate('proyecto').populate('creadoPor');
            return avanceBuscado;
        }
    },
    /* creo la mutaciones, el args me permite ubicar cada */
      /* operaciones que puedo hacer con los documentos de la bd */
    Mutation:{
        crearAvance: async (parent,args) =>{
            const avanceCreado = await AdvanceModel.create({
               fecha:args.fecha,
               creadoPor: args.creadoPor,
               descripcion: args.descripcion,
               proyecto: args.proyecto,
            });
            return avanceCreado;
        },
    },
};

export {resolversAvance};