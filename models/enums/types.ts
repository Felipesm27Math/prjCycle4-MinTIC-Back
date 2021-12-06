import { gql } from "apollo-server-express";

const tiposEnums = gql`

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
  enum Enum_EstadoInscripcion {
    ACEPTADA 
    RECHAZADA 
    ESPERA 
  }
  
`;
export { tiposEnums };