import { AdvanceModel } from "./avance.js";

const resolversAvance = {
    Query:{
        Avances: async (parent, args) => {
            
            const listaAvances = await AdvanceModel.find().populate('usuario').populate([
                {
                    path:'proyecto',
                    populate: {
                        path: 'lider',
                    },
                },
                ]);
            return listaAvances;
          },
        BuscarAvance: async (parent,args) => {
            const avanceBuscado = await AdvanceModel.findOne({id: args._id})
            return avanceBuscado;
        },  
    },
    Mutation:{
        crearAvance: async (parent,args) =>{
            const avanceCreado = await AdvanceModel.create({
               fecha:Date.now(),
               usuario: args.usuario,
               descripcion: args.descripcion,
               proyecto: args.proyecto,
               observaciones: args.observaciones,
            });
            return avanceCreado;
        },

        editarAvance: async (parent,args) => {
            const avanceEditado = await AdvanceModel.findOneAndUpdate(args._id,{
                fecha:Date.now(),
                $con:{descripcion:args.descripcion},
                $set:{observaciones: args.observaciones},
            },{new:true});
            return avanceEditado;
        },
    },
};

export {resolversAvance};