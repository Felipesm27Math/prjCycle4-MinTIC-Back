import { InscriptionModel } from "./inscripcion.js";

const resolversInscripcion= {
    Query:{
        Inscripcion: async (parent,args) =>{
            const inscripcion = await InscriptionModel.find().populate('proyecto').populate('estudiante');
            return inscripcion;
        },
        BuscarInscripcion: async (parent,args) => {
            const buscarInscripcion = await InscriptionModel.find({usuarios: args._id}).populate('estudiante').populate('proyecto');
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
            });
            if (Object.keys(args).includes('estado')) {
                inscripcionEditada.estado = args.estado;
            }
            return inscripcionEditada;
        },
    },
};

export {resolversInscripcion};