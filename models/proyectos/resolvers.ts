import { ProjectModel } from "./proyecto";

const resolversProyecto = {
    Query:{
        Proyectos: async (parent,args) => {
            const proyectos = await ProjectModel.find().populate('lider');
            return proyectos;
        }
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
    },
};

export {resolversProyecto}
