import {gql} from 'apollo-server-express';

const tiposAutenticar = gql`

    type Token{
        token:String
        error:String
    }

    type Mutation{
        registro(
            nombre: String!
            correo: String!
            identificacion: String!
            password: String!
            rol: Enum_Rol!
            estado: Enum_EstadoUsuario
        ):Token!

        login(
            correo: String!
            password: String!
        ):Token

        valiarToken:Token
    }
`;

export {tiposAutenticar};