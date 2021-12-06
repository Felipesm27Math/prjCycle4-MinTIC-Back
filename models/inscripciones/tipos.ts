/* son como las definiciones, las declaraciones de cada una de las instrucciones */
import { gql } from "apollo-server-express";

const tiposInscripcion = gql`
""" definir el tipo de usuario """
  type Inscripcion {
    _id: ID!
    estudiante: Usuario!
    proyecto: Proyecto!
    fechaIngreso: Date!
    fechaSalida: Date
    estado: Enum_EstadoInscripcion
  }
  """ consulta que me devuelve un array de usuarios """
  type Query {
    Inscripcion: [Inscripcion]
    BuscarInscripcion(_id: String!): Inscripcion
  }
  """ son las operaciones que puedo realizar en la bd """
  type Mutation {

    crearInscripcion(
        estudiante: String!
        proyecto: String!
        fechaIngreso: Date!
        fechaSalida: Date
        estado: Enum_EstadoInscripcion
    ): Inscripcion

    editarInscripcion(
        _id: String!
        estudiante: String!
        proyecto: String!
        fechaIngreso: Date!
        fechaSalida: Date
        estado: Enum_EstadoInscripcion!
    ): Inscripcion
    
  }
`;

export { tiposInscripcion };