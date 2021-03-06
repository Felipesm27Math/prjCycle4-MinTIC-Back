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
                },
                {
                    path:"lider",
                },
            ]);
            return proyectos;
        },
    },
    Mutation:{
        crearProyecto: async (parent,args) => {
            const proyectoCreado = await ProjectModel.create({
                nombre:args.nombre,
                presupuesto: args.presupuesto,
                lider: args.lider,
                objetivos:args.objetivos,
            });
            return proyectoCreado;
        },
        editarProyecto: async (parent, args) => {
            const proyectoEditado = await ProjectModel.findByIdAndUpdate(args._id,
              {
              nombre: args.nombre,
              presupuesto: args.presupuesto,
              lider: args.lider,
              objetivos:args.objetivos,
              estado: args.estado,
              fase: args.fase,
             
              },{ new: true }
                );
      
            return proyectoEditado;
          },
          crearObjetivo: async (parent, args) => {
            const proyectoConObjetivo = await ProjectModel.findByIdAndUpdate(
              args.idProyecto,
              {
                $addToSet: {
                  objetivos: { ...args.campos },
                },
              },
              { new: true }
            );
      
            return proyectoConObjetivo;
          },
          editarObjetivo: async (parent, args) => {
            const proyectoEditado = await ProjectModel.findByIdAndUpdate(
              args.idProyecto,
              {
                $set: {
                  [`objetivos.${args.indexObjetivo}.descripcion`]: args.campos.descripcion,
                  [`objetivos.${args.indexObjetivo}.tipo`]: args.campos.tipo,
                },
              },
              { new: true }
            );
            return proyectoEditado;
          },
          eliminarObjetivo: async (parent, args) => {
            const proyectoObjetivo = await ProjectModel.findByIdAndUpdate(
              { _id: args.idProyecto },
              {
                $pull: {
                  objetivos: {
                    _id: args.idObjetivo,
                  },
                },
              },
              { new: true }
            );
            return proyectoObjetivo;
          },
        },
        

        
};

export {resolversProyecto}
