import {UserModel} from '../../models/usuarios/usuario.js'
import bcrypt from 'bcrypt';
import { generateToken } from '../../utils/tokenUtils.js';


const resolversAutenticar = {
    Mutation:{
        registro: async (parent,args) => {

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(args.password, salt);

            const ususarioCreado = await UserModel.create({
                nombre:args.nombre,
                identificacion:args.identificacion,
                correo: args.correo,
                rol:args.rol,
                password:hashedPassword,
            });
            console.log("usuario creado",ususarioCreado);
            return {
                token:generateToken({
                    _id:ususarioCreado._id,
                    nombre:ususarioCreado.nombre,
                    correo:ususarioCreado.correo,
                    identificacion:ususarioCreado.identificacion,
                    rol:ususarioCreado.rol,
                }),
            };
        },

        login: async (parent,args) => {
            const usuarioEncontrado = await UserModel.findOne({correo:args.correo});
            
            if(await bcrypt.compare(args.password,usuarioEncontrado.password)){
                return {
                    token: generateToken({
                        _id:usuarioEncontrado._id,
                        nombre:usuarioEncontrado.nombre,
                        correo:usuarioEncontrado.correo,
                        identificacion:usuarioEncontrado.identificacion,
                        rol:usuarioEncontrado.rol,
                    }),
                };
            };
        },

        refrescarToken: async (parent,args,context) => {
            console.log('conetxto',context);
            if(!context.userData){
                return{
                    error:'Token no valido',
                };
            }else{
                return{
                    token: generateToken({
                        _id: context.userData._id,
                        nombre: context.userData.nombre,
                        apellido: context.userData.apellido,
                        identificacion: context.userData.identificacion,
                        correo: context.userData.correo,
                        rol: context.userData.rol,
                    }),
                };
            };
        },

    },
};

export {resolversAutenticar};