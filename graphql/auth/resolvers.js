
const resolversAutenticar = {
    Mutation:{
        registro: async (parent,args) => {
            console.log('crear usuario');
            return "UsuarioCreado";
        },
    },
};

export {resolversAutenticar};