import { ProjectModel } from "../models/project/project";
import { UserModel } from "../models/users/user";

const resolvers = {
    Query:{
        Usuarios: async (parent,args) => {
            const usuarios = await UserModel.find();
            return usuarios;
        },     
        Usuario: async (parent,args) => {
            const usuario = await UserModel.findOne({_id:args._id});
            return usuario;
        },
        Proyectos: async (parent,args) => {
            const proyectos = await ProjectModel.find().populate('lider');
            return proyectos;
        }
    },
    Mutation:{
        crearUsuario: async (parent,args) => {
            const usuarioCreado = await UserModel.create({
                nombre:args.nombre,
                correo: args.correo,
                identificacion: args.identificacion,
                rol: args.rol,
            });

            if (Object.keys(args).includes('estado')) {
                usuarioCreado.estado = args.estado;
            }
            return  usuarioCreado;   
        },

        editarUsuario: async (parent,args) => {
            const usuarioEditado = await UserModel.findOneAndUpdate(args._id,{
                nombre:args.nombre,
                correo:args.correo,
                identificacion:args.identificacion,
            });
            return usuarioEditado;
        },
        
        eliminarUsuario: async (parent,args) => {
            const usuarioEliminado = await UserModel.findOneAndDelete({_id:args._id});
            return usuarioEliminado;            
        },
        crearProyecto: async (parent,args) => {
            const proyectoCreado = await ProjectModel.create({
                nombre:args.nombre,
                estado: args.estado,
                fase: args.fase,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                lider: args.lider,
                objetivos: args.objetivos,
            });
            return proyectoCreado;
        },
    },
};

export {resolvers}
