import { gql } from "apollo-server-express";
import { tiposEnums } from "../models/enums/types.js";
import { tiposProyecto } from "../models/proyectos/tipos.js";
import { tiposUsuario } from "../models/usuarios/tipos.js";
import {tiposAvances} from '../models/avances/tipos.js';
import {tiposInscripcion} from '../models/inscripciones/tipos.js';


const tiposGlobales = gql`
  scalar Date
`;

export const tipos  = [tiposGlobales, tiposEnums, tiposUsuario, tiposProyecto,tiposAvances, tiposInscripcion];
