import { gql} from "apollo-server-express";

const tiposAvances = gql `
type Avance{
    _id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: String!
    proyecto: Proyecto!
    creadoPor:Usuario!
}

type Query{
    Avances:[Avance]
    BuscarAvances(_id: String!): [Avance]
}

type Mutation{
    crearAvance(
        fecha: Date
        descripcion: String!
        proyecto: String!
        creadoPor:String!
    ):Avance

    editarAvance(
        _id: String!
        fecha: Date
        descripcion: String
        proyecto: String!
        creadoPor:String!
        observaciones: String
    ):Avance

    registrarAvance(
        _id: String!
        descripcion: String!
    ):Avance
}
`;

export {tiposAvances};