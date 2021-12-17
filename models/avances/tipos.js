import { gql} from "apollo-server-express";

const tiposAvances = gql `
type Avance{
    _id: ID!
    proyecto: Proyecto
    usuario: Usuario
    fecha: Date
    descripcion: String
    observaciones: String
}

type Query{
    Avances: [Avance]
    BuscarAvance(_id: String!): Avance
}

type Mutation{
    crearAvance(
        fecha: Date
        descripcion: String
        proyecto: String!
        usuario:String!
        observaciones: String
    ):Avance

    editarAvance(
        _id: String!
        fecha: Date
        descripcion: String
        proyecto: String
        usuario:String
        observaciones: String
    ):Avance

    registrarAvance(
        _id: String!
        descripcion: String!
    ):Avance
}
`;

export {tiposAvances};