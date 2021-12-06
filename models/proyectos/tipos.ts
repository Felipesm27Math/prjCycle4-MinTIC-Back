import { gql } from "apollo-server-express";

const tiposProyecto = gql`
""" son de tipo array y si los quiero usar de esa manera tengo definirlos como tipos 
los tipos de usan para las respuestas"""
  type Objetivo {
    _id: ID!
    descripcion:String!
    tipo:Enum_TipoObjetivo!
  }
""" y tambien tengo que definir el input y lo puedo usar para crear el objecto 
y los input para las entradas"""
  input crearObjetivo{
    descripcion:String!
    tipo:Enum_TipoObjetivo!
  }

  type Proyecto {
    _id:ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    FechaFin: Date
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
        fechaFin: Date
        lider:String!
        estado: Enum_EstadoProyecto!
        fase: Enum_FaseProyecto!
        objetivos: [crearObjetivo]
    ):Proyecto
  }
`;
export { tiposProyecto };
