import { Query } from "mongoose";
import { InscriptionModel } from "./inscripcion";

const resolversInscripcion= {
    Query:{
        Inscripcion: async (parent,args) =>{
            const inscripcion = await InscriptionModel.find().populate('proyecto').populate('estudiante');
            return inscripcion;
        },
        BuscarInscripcion: async (parent,args) => {
            const buscarInscripcion = await InscriptionModel.find({usuarios: args._id}).populate('estudiante').populate('proyecto');
            return buscarInscripcion;
        }
    },
     /* creo la mutaciones, el args me permite ubicar cada campo */
    Mutation:{
        crearInscripcion: async (parent,args) =>{
            const inscripcionCreada = await InscriptionModel.create({
               estudiante: args.usuario,
               proyecto: args.proyecto,
               fechaIngreso: args.fechaIngreso,
               estado: args.estado,
            });
            return inscripcionCreada;
        },

        editarInscripcion: async (parent,args) =>{
            const inscripcionEditada = await InscriptionModel.findOneAndUpdate(args._id,{
               estudiante: args.usuario,
               proyecto: args.proyecto,
               fechaSalida: args.fechaSalida,
               estado: args.estado,
            });
            return inscripcionEditada;
        },
    },
};

export {resolversInscripcion};