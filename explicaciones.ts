import connectDB from "./db/db";
import { UserModel} from "./models/users/user";
import {
  Enum_Rol,
  Enum_EstadoUsuario,
  Enum_EstadoProyecto,
  Enum_FaseProyecto,
  Enum_TipoObjetivo,
  Enum_EstadoInscripcion,
} from "./models/enums/enums";
import { ProjectModel } from "./models/project/project";
import { AdvanceModel } from "./models/advances/advances";
import { InscriptionModel } from "./models/inscription/inscription";

const main = async () => {
  await connectDB();

  

  //db.usuarios.insertOne({id:1096187614,nombre:"Victor Quintero",contrasena:"1234",correo:"victor@gmail.com", rol:"administrador",estado:"pendiente (default)",fechaCreacion: Date()})


  // HU 21
  // const checkAdvance = await AdvanceModel.find({project:'6197dd28c095c0a153fbe27c'});
  // console.log("Los avances del proyecto son", checkAdvance);
  // db.avances.findOne({proyecto:ObjectId(“6197dd28c095c0a153fbe27c”)})


  //HU 22
  // const addAdvance = await AdvanceModel.create({
  //   proyecto: '_id',
  //   creadoPor: '_id.Usuario',
  //   fecha: Date.now(),
  //   descripcion: ['Este es el primer avance que hago yo'],
  // });
  

  //HU 23
  //const updateAdvance = await AdvanceModel.findOneAndUpdate({id:'6197ee3f02399f3904bd2940'},{$set :{descripcion: 'De esta manera modifico mi avance'}});

};

main();

//Create user, project and one advance

// const userAdvance = await UserModel.create({
//   nombre: 'Felipe Supelano',
//   correo: 'felipesm27@gmail.com',
//   identificacion: '1015446175',
//   rol : Enum_Rol.ESTUDIANTE,
//   estado: Enum_EstadoUsuario.AUTORIZADO,
// });

//   const createProject = await ProjectModel.create({
//   nombre: "Prueba proyecto avance",
//   presupuesto: 2500000,
//   fechaInicio: Date.now(),
//   fechaFin: new Date("2022-10-17"),
//   lider: '61957e4707b6e97d9a3a3306',
//   estado: Enum_EstadoProyecto.ACTIVO,
//   fase: Enum_FaseProyecto.INICIADO,
//   objetivos: [
//     {
//       descripcion: "Practica HU 21 a 23",
//       tipo: Enum_TipoObjetivo.GENERAL,
//     },
//     {
//       descripcion: "1. Crear usuario y proyecto",
//       tipo: Enum_TipoObjetivo.ESPECIFICO,
//     },
//     {
//       descripcion: "2. Crear avance",
//       tipo: Enum_TipoObjetivo.ESPECIFICO,
//     },
//   ],
// });

// const advanceProject = await AdvanceModel.create({
//   proyecto: createProject._id,
//   creadoPor: userAdvance._id,
//   fecha: Date.now(),
//   descripcion:['Este es el primer avance'],
// });





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


//HU 21 Como estudiante
// Como estudiante 
// Dado que mi inscripción a un proyecto fue aceptada
// Cuando requiera listar los avances de un proyecto en el que estoy inscrito
// Entonces podré ver la lista de los avances del proyecto registrados


