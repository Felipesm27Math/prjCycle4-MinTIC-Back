
const resolversAutenticar = {
    Mutation:{
        registro: async (parent,args) => {
            console.log('crear usuario',args);
            return "UsuarioCreado";
        },
    },
};

export {resolversAutenticar};