import { UserModel } from './usuario';

const resolversUsuario = {
  Query:{
      /* listo usuarios */
      Usuarios: async (parent,args) => {
          const usuarios = await UserModel.find();
          return usuarios;
      },     
      /* busco usuarios por id */
      Usuario: async (parent,args) => {
          const usuario = await UserModel.findOne({_id:args._id});
          return usuario;
      },
      BuscarUsuarioEstudiante: async (parent,args) => {
          const buscarEstudiante = await UserModel.find({rol:args.rol});
          return buscarEstudiante;
      },
      
  },
  /* ejecutamos una funcion que debe retornar un objeto de tipo usuario */
  /* operaciones que puedo hacer con los documentos de la bd */
  Mutation:{
    editarEstadoEstudiante: async (parent,args) => {
        const estudianteEditado = await UserModel.findOneAndUpdate(args._id, args.rol,{
           estado:args.estado,
        });
        if (Object.keys(args).includes('estado')) {
            estudianteEditado.estado = args.estado;
        }
        return estudianteEditado;

      /*   aceptarEstudiante: async (parent,args) => {
            const estudianteAceptado = await UserModel.findOneAndUpdate(args.rol, args._id,{
                estado:args.estado,
            });
            if (Object.keys(args).includes('estado')) {
                estudianteAceptado.estado = args.estado;
            }
            return estudianteAceptado;
        }, */
    },
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