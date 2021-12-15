import { ProjectModel } from "./proyecto.js";

const resolversProyecto = {
    Query:{
        Proyectos: async (parent,args) => {
            const proyectos = await ProjectModel.find().populate([
                {
                    path:"avances",
                },
                {
                    path:"inscripciones",
                }
            ]);
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
                lider: args.lider,
            });
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

        crearObjetivo: async (parent,args) => {
            const proyectoObjetivoCreado = await ProjectModel.findByIdAndUpdate(args.idProyecto,{
                $addToSet:{
                    objetivos:{
                        descripcion:args.descripcion,
                        tipo: args.tipo,
                    },
                },
            });
            return proyectoObjetivoCreado;
        },
        
    },
};

export {resolversProyecto}
