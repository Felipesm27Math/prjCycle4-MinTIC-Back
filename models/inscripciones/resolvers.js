import { InscriptionModel } from "./inscripcion.js";

const resolversInscripcion= {
    Query:{
        Inscripcion: async (parent,args) =>{
            const inscripcion = await InscriptionModel.find().populate([
                {
                    path:"estudiante",
                },
                {
                    path:"proyecto",
                }
            ]);
            return inscripcion;
        },
        BuscarInscripcion: async (parent,args) => {
            const buscarInscripcion = await InscriptionModel.findOne({id: args._id}).populate('estudiante').populate('proyecto');
            return buscarInscripcion;
        },
    },
     /* creo la mutaciones, el args me permite ubicar cada campo */ 
    Mutation:{
        crearInscripcion: async (parent,args) =>{
            const inscripcionCreada = await InscriptionModel.create({
               estudiante: args.estudiante,
               proyecto: args.proyecto,
            });
            return inscripcionCreada;
        },

        editarInscripcion: async (parent,args) =>{
            const inscripcionEditada = await InscriptionModel.findByIdAndUpdate(args._id,{
               estado: args.estado,
               fechaIngreso: Date.now(),
            },{new:true});
            if (Object.keys(args).includes('estado')) {
                inscripcionEditada.estado = args.estado;
            }
            return inscripcionEditada;
        },
    },
};

export {resolversInscripcion};