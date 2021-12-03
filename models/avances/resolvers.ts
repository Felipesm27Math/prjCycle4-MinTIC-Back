import { AdvanceModel } from "./avance";

const resolversAvance = {
    Query:{
        Avances: async (parent,args) =>{
            const avances = await AdvanceModel.find().populate('proyecto').populate('creadoPor');
            return avances;
        },
        BuscarAvances: async (parent,args) => {
            const avanceBuscado = await AdvanceModel.find({proyecto: args._id}).populate('proyecto').populate('creadoPor');
            return avanceBuscado;
        },
    },
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