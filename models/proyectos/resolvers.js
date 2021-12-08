import { ProjectModel } from "./proyecto.js";

const resolversProyecto = {
    Query:{
        Proyectos: async (parent,args) => {
            const proyectos = await ProjectModel.find().populate('avances').populate('inscripciones');
            return proyectos;
        },
        ProyectoLider: async (parent,args) => {
            const proyectosLider = await ProjectModel.findOne({id: args._id});
            return proyectosLider;
        },
    },
    Mutation:{
        crearProyecto: async (parent,args) => {
            const proyectoCreado = await ProjectModel.create({
                nombre:args.nombre,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                lider: args.lider,
                objetivos: args.objetivos,
            });
            if (Object.keys(args).includes('estado') || Object.keys(args).includes('fase')){
                proyectoCreado.estado = args.estado
                proyectoCreado.fase = args.fase;
            }
            return proyectoCreado;
        },

        editarEstadoFase: async (parent,args) => {
            const estadofaseEditado = await ProjectModel.findOneAndUpdate(args._id, {
                estado: args.estado,
                fase: args.fase,
            },{new:true});
            if (Object.keys(args).includes('estado') || Object.keys(args).includes('fase')){
                estadofaseEditado.estado = args.estado
                estadofaseEditado.fase = args.fase;
            }
            return estadofaseEditado;
        },

        editarProyectoLider: async (parent,args) => {
            const proyectoLiderEditado = await ProjectModel.findOneAndUpdate(args._id,{
                nombre:args.nombre,
                presupuesto: args.presupuesto,
                objetivos: args.objetivos,
            },{new:true});
            return proyectoLiderEditado;
        },
    },
};

export {resolversProyecto}
