import { gql } from "apollo-server-express";

const tiposUsuario = gql`
  type Usuario {
    _id: ID!
    nombre: String!
    identificacion: String!
    correo: String!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
    foto: String
    inscripciones: [Inscripcion]
    avancescreados: [Avance]
    proyectosLiderados: [Proyecto]
  }
  input FiltroUsuarios{
    id: ID
    nombre: String
    identificacion: String
    correo: String
    rol: Enum_Rol
    estado: Enum_EstadoUsuario
  }
  type Query {
    Usuarios(filtro:FiltroUsuarios): [Usuario]
    Usuario(correo: String!,contrasena:String!): Usuario
    UsuarioEstudiante(rol: Enum_Rol!): [Usuario]
    UsuarioFiltro(rol:Enum_Rol!):Usuario
  }
  type Mutation {

    crearUsuario(
      nombre: String!
      correo: String!
      identificacion: String!
      password: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario
    ): Usuario

    editarDatosUsuario(
      _id: String!
      nombre: String
      identificacion: String
      correo: String
      estado: Enum_EstadoUsuario
    ): Usuario

    editarEstadoUsuario(
      _id: String!
      estado: Enum_EstadoUsuario!
    ):Usuario

    aceptarEstudiante(
      _id: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario!
    ):Usuario
    
    eliminarUsuario(_id: String, correo: String): Usuario
  }
`;

export { tiposUsuario };