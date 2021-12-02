import { gql } from "apollo-server-express";
import { tiposEnums } from "../models/enums/types";
import { tiposProyecto } from "../models/proyectos/tipos";
import { tiposUsuario } from "../models/usuarios/tipos";
import {tiposAvances} from '../models/avances/tipos';


const tiposGlobales = gql`
  scalar Date
`;

export const tipos  = [tiposGlobales, tiposEnums, tiposUsuario, tiposProyecto,tiposAvances];
