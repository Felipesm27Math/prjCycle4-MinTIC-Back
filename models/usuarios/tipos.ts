import { gql } from "apollo-server-express";

const tiposUsuario = gql`
  type Usuario {
    _id: ID!
    nombre: String!
    identificacion: String!
    correo: String!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
  }
  """ tipos de consultas que voy a realizar """
  type Query {
    Usuarios: [Usuario]
    Usuario(_id: String!): Usuario
    BuscarUsuarioEstudiante(rol: Enum_Rol): [Usuario]
    
  }
  """ operaciones que puedo hacer con los documentos de la bd """
  type Mutation {

    crearUsuario(
      nombre: String!
      correo: String!
      identificacion: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario
    ): Usuario

    editarUsuario(
      _id: String!
      nombre: String!
      identificacion: String!
      correo: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario!
    ): Usuario
    
    editarEstadoEstudiante(
      _id: String!
      estado: Enum_EstadoUsuario!
    ): Usuario

    eliminarUsuario(_id: String, correo: String): Usuario
  }
`;

export { tiposUsuario };