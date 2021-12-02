import { gql } from "apollo-server-express";

const tiposProyecto = gql`

  type Objetivo {
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
    objetivos: [Objetivo]
  }

  type Query {
    Proyectos: [Proyecto]
  }

  type Mutation {
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
export { tiposProyecto };
