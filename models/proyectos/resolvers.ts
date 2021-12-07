import { ProjectModel } from "./proyecto";

const resolversProyecto = {
    Query:{
        Proyectos: async (parent,args) => {
            const proyectos = await ProjectModel.find().populate('lider');
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
            if (Object.keys(args).includes)
            return proyectoCreado;
        },

        editarEstadoP: async (parent,args) => {
            const estadoEditado = await ProjectModel.findOneAndUpdate(args._id, {
                estado: args.estado,
            });
            return estadoEditado;
        },

        editarFaseP: async (parent,args) => {
            const faseEditada = await ProjectModel.findOneAndUpdate(args._id, {
                fase: args.fase,
            });
            return faseEditada;
        },

        editarProyectoLider: async (parent,args) => {
            const proyectoLiderEditado = await ProjectModel.findOneAndUpdate(args._id,{
                nombre:args.nombre,
                presupuesto: args.presupuesto,
                objetivos: args.objetivos,
            });
            return proyectoLiderEditado;
        },
    },
};

export {resolversProyecto}
