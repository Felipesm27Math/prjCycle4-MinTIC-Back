import { gql} from "apollo-server-express";

const tiposAvances = gql `
type Avance{
    _id: ID!
    fecha: Date!
    descripcion: String
    observaciones: String
    proyecto: Proyecto!
    creadoPor:Usuario!
}
""" tipos de consultas que voy a realizar """
type Query{
    Avances:[Avance]
    BuscarAvances(_id: String!): [Avance]
}
""" operaciones que puedo hacer con los documentos de la bd """
type Mutation{
    crearAvance(
        fecha: Date!
        descripcion: String!
        proyecto: String!
        creadoPor:String!
    ):Avance
}
`;

export {tiposAvances};