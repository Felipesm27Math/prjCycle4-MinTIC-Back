import { resolversProyecto } from '../models/proyectos/resolvers.js';
import { resolversUsuario } from '../models/usuarios/resolvers.js';
import {resolversAvance} from '../models/avances/resolvers.js';
import {resolversInscripcion} from '../models/inscripciones/resolvers.js';
import {resolversAutenticar} from './auth/resolvers.js';

export const resolvers = [resolversProyecto, resolversUsuario,resolversAvance,resolversInscripcion, resolversAutenticar]; 