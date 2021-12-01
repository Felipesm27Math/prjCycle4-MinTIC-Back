import { gql } from "apollo-server-express";

const typeDefs = gql`

  scalar Date

  enum Enum_Rol {
    LIDER
    ESTUDIANTE
    ADMINISTRADOR
  }

  enum Enum_EstadoUsuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }

  enum Enum_EstadoProyecto {
    ACTIVO
    INACTIVO
  }

  enum Enum_FaseProyecto {
    INICIADO
    DESARROLLO
    TERMINADO
    NULO
  }
  
  enum Enum_TipoObjetivo {
    GENERAL
    ESPECIFICO
  }

  type Usuario {
    _id: ID!
    nombre: String!
    identificacion: String!
    correo: String!
    estado: Enum_EstadoUsuario
    rol: Enum_Rol!
  }

  type Objetivos {
    _id: ID!
    descripcion:String!
    tipo:Enum_TipoObjetivo!
  }

  input crearObjetivo{
    descripcion:String!
    tipo:Enum_TipoObjetivo!
  }

  type Proyecto {
    _id:ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    FechaFin: Date!
    lider: Usuario!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    objetivos: [Objetivos]
  }

  type Query {
    Usuarios: [Usuario]
    Usuario(_id:String!):Usuario 
    Proyectos: [Proyecto]
  }

  type Mutation {
    crearUsuario(
      nombre: String!
      identificacion: String!
      correo: String!
      estado: Enum_EstadoUsuario
      rol: Enum_Rol!
    ): Usuario

    editarUsuario(
        _id: String!
        nombre: String!
        identificacion: String!
        correo: String!
    ): Usuario

    eliminarUsuario(
        _id:String!
    ): Usuario
    
    crearProyecto(
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        lider:String!
        estado: Enum_EstadoProyecto!
        fase: Enum_FaseProyecto!
        objetivos: [crearObjetivo]
    ):Proyecto
  }
`;
export { typeDefs };
