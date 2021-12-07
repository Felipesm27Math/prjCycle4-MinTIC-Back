import { resolversProyecto } from '../models/proyectos/resolvers';
import { resolversUsuario } from '../models/usuarios/resolvers';
import {resolversAvance} from '../models/avances/resolvers';
import {resolversInscripcion} from '../models/inscripciones/resolvers';


export const resolvers = [resolversProyecto, resolversUsuario,resolversAvance,resolversInscripcion]; 