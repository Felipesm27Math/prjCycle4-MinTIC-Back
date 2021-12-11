import {gql} from 'apollo-server-express';

const tiposAutenticar = gql`
    type Mutation{
        registro(
            nombre: String!
            correo: String!
            identificacion: String!
            password: String!
            rol: Enum_Rol!
            estado: Enum_EstadoUsuario
        ):String!
    },
`;

export {tiposAutenticar};