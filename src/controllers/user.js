import prisma from '../prisma.js';

//nome da funcao (recebendo,responder,proximo)
export const UserController= {
    async store(req, res, next){
        try{
            const {email, pass, name,  cpf, phone } = req.body;

            const u = await prisma.user.create({
                data: { 
                     
                    email, 
                    pass,
                    name,   
                    cpf, 
                    phone

                }
            });
          
            res.status(201).json(u);
        }catch(err){
            next(err);
        }
    },
    async index(req, res, next){
        const users = await prisma.user.findMany({
            where:{
                name: req.query.name,
            }
        })

        res.status(200).json(users)
    },

}
