import {gql} from "apollo-server-express";

const tiposInscripcion = gql `
type Inscripcion{
    _id: ID!
    estudiante:Usuario!
    proyecto:Proyecto!
    fechaIngreso:Date!
    fechaSalida:Date!
    estado:Enum_EstadoInscripcion
}
type Query {
    Inscripciones: [Inscripcion]
}
type Mutation {
    crearInscripcion(
        estudiante: String!
        proyecto: String!
    ): Inscripcion
    
    aceptarInscripcion(_id: String!): Inscripcion
}
`;

export {tiposInscripcion};
