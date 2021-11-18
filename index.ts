import connectDB from "./db/db";
import { UserModel } from "./models/users/user";
import {
  Enum_Rol,
  Enum_EstadoUsuario,
  Enum_EstadoProyecto,
  Enum_FaseProyecto,
  Enum_TipoObjetivo,
} from "./models/enums/enums";
import { ProjectModel } from "./models/project/project";

const main = async () => {
  await connectDB();


};

main();

// Creat user, project, assign leader and write objectives
    //   const usuarioProject = await UserModel.create({
//     nombre: "Camila",
//     correo: "cam@ce.com.co",
//     identificacion: "090909",
//     rol: Enum_Rol.LIDER,
//   });

//   const createProject = await ProjectModel.create({
//     nombre: "GeoGebra 4",
//     presupuesto: 10000000,
//     fechaInicio: Date.now(),
//     fechaFin: new Date("2022-10-17"),
//     lider: usuarioProject._id,
//     objetivos: [
//       {
//         descripcion: "Practicar como agregar un proyecto",
//         tipo: Enum_TipoObjetivo.GENERAL,
//       },
//       {
//         descripcion: "1. Usar mongoos como herramienta",
//         tipo: Enum_TipoObjetivo.ESPECIFICO,
//       },
//       {
//         descripcion: "2. Usar await para crear el proyecto y agregar el lider",
//         tipo: Enum_TipoObjetivo.ESPECIFICO,
//       },
//     ],
//   });

//------------------------------------------------------

// await ProjectModel.create({
//     nombre: 'GeoGebra 2',
//     presupuesto: 100000000,
//     fechaInicio: Date.now(),
//     fechaFin: new Date('2022-10-17'),
//     lider: '61957e4707b6e97d9a3a3306',
// }).then((u) => {
//     console.log('Created project', u);
// }).catch((e) => {
//     console.error('Error, project did not create', e);
// });

//Get project
// await ProjectModel.find({ nombre: 'GeoGebra 2' }).populate('lider')
//     .then((u) => {
//         console.log("Project", u);
//     })
//     .catch((e) => {
//         console.error("Error found project", e);
//     });

// const getProject = await ProjectModel.find({ nombre: 'GeoGebra 2' }).populate('lider');
// console.log('The project is: ', getProject);

//Add User
//   await UserModel.create({
//     nombre: 'Lina Munoz',
//     correo: 'lina@axa.ba.co',
//     identificacion: '140693',
//     rol:Enum_Rol.ESTUDIANTE,
//   }).then((u) =>{
//       console.log('Created user',u);
//   })
//   .catch((e) => {
//       console.error('Error, user did not create', e);
//   });

//Get users
//   await UserModel.find()
//     .then((u) => {
//       console.log("Users", u);
//     })
//     .catch((e) => {
//       console.error("Error found users", e);
//     });

//Edit user
// await UserModel.findOneAndUpdate(
//     { correo: 'felipes@gmail.com' },
//     {
//         nombre: 'Felipe Supelano',
//     }
// ).then((u) => {
//     console.log('Update user', u);
// })
//     .catch((e) => {
//         console.error('Update error', e);
//     });

// Delete user
// await UserModel.findOneAndDelete({correo:'felipes@gmail.com'}).then((u) => {
//     console.log('User deleted', u);
// }).catch((e) => {
//     console.error('User did not delete',e);
// });
