import { gql } from "apollo-server-express";

const tiposUsuario = gql`
  type Usuario {
    _id: ID!
    nombre: String!
    identificacion: String!
    contrasena: String!
    correo: String!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
  }
  type Query {
    Usuarios: [Usuario]
    Usuario(_id: String!): Usuario
  }
  type Mutation {

    crearUsuario(
      nombre: String!
      correo: String!
      identificacion: String!
      contrasena: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario
    ): Usuario

    editarUsuario(
      _id: String!
      nombre: String!
      identificacion: String!
      contrasena: String!
      correo: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario!
    ): Usuario
    
    eliminarUsuario(_id: String, correo: String): Usuario
  }
`;

export { tiposUsuario };