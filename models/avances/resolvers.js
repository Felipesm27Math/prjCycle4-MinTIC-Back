import { AdvanceModel } from "./avance.js";

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
               fecha:Date.now(),
               creadoPor: args.creadoPor,
               descripcion: args.descripcion,
               proyecto: args.proyecto,
            });
            return avanceCreado;
        },

        editarAvance: async (parent,args) => {
            const avanceEditado = await AdvanceModel.findOneAndUpdate(args._id,{
                fecha:Date.now(),
                descripcion:args.descripcion,
                creadoPor: args.creadoPor,
                observaciones: args.observaciones,
                proyecto: args.proyecto,
            },{new:true});
            return avanceEditado;
        },
    },
};

export {resolversAvance};