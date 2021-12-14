import { UserModel } from './usuario.js';

const resolversUsuario = {
  Query:{
      Usuarios: async (parent,args) => {
          const usuarios = await UserModel.find();
          return usuarios;
      },     
      Usuario: async (parent,args) => {
          const usuario = await UserModel.findOne({correo:args.correo,contrasena:args.contrasena});
          return usuario;
      },
      UsuarioEstudiante: async (parent,args) => {
          const estudiantesEncontrados = await UserModel.find({rol: args.rol});
          return estudiantesEncontrados;
      },
     
  },
  Mutation:{
      crearUsuario: async (parent,args) => {

          const usuarioCreado = await UserModel.create({
              nombre:args.nombre,
              correo: args.correo,
              password: args.password,
              identificacion: args.identificacion,
              rol: args.rol,
          });

          if (Object.keys(args).includes('estado')) {
              usuarioCreado.estado = args.estado;
          }
          return  usuarioCreado;   
      },

      editarDatosUsuario: async (parent,args) => {
          const usuarioEditado = await UserModel.findOneAndUpdate(args._id,{
              nombre:args.nombre,
              correo:args.correo,
              contrasena: args.contrasena,
              identificacion:args.identificacion,
              rol: args.rol,
          },{new:true});
          return usuarioEditado;
      },

      editarEstadoUsuario: async (parent,args) => {
          const unUsuarioEditado = await UserModel.findOneAndUpdate(args._id,{
              estado:args.estado,
          },{new:true});
          if (Object.keys(args).includes('estado')) {
            unUsuarioEditado.estado = args.estado;
        }
          return unUsuarioEditado;
      },

      aceptarEstudiante: async (parent,args) => {
        const estudianteAceptado = await UserModel.findOneAndUpdate(args.rol, args._id,{
            estado:args.estado,
        },{new:true});
        if (Object.keys(args).includes('estado')) {
            estudianteAceptado.estado = args.estado;
        }
        return estudianteAceptado;
    },
      
      eliminarUsuario: async (parent,args) => {
        if (Object.keys(args).includes('_id')) {
            const usuarioEliminado = await UserModel.findOneAndDelete({_id:args._id});
            return usuarioEliminado; 
        } else if(Object.keys(args).includes('correo')){
            const usuarioEliminado = await UserModel.findOneAndDelete({correo:args.correo});
            return usuarioEliminado; 
        }         
      },
  },
};

export {resolversUsuario};