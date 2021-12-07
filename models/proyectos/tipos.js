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
    fechaFin: Date!
    lider: Usuario!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    objetivos: [Objetivo]
    avances: [Avance]
    inscripciones: [Inscripcion]
    
  }

  type Query {
    Proyectos: [Proyecto]
    ProyectoLider (_id:String!):Proyecto
  }

  type Mutation {
    crearProyecto(
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        lider:String!
        estado: Enum_EstadoProyecto
        fase: Enum_FaseProyecto
        objetivos: [crearObjetivo]
    ):Proyecto

    editarEstadoFase(
      _id: String!
      estado: Enum_EstadoProyecto
      fase: Enum_FaseProyecto
    ):Proyecto


    editarProyectoLider(
      _id: String!
      nombre: String
      objetivos: [crearObjetivo]
      presupuesto:Float
    ):Proyecto

  }
`;
export { tiposProyecto };
