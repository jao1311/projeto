import prisma from '../prisma.js';

//nome da funcao (recebendo,responder,proximo)
export const UserControler= {
    async store(req, res, next){
        try{
            const {id,  email, pass, name,  cpf, phone } = req.body;

            const u = await prisma.user.create({
                data: { 
                    id,  
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
    }

}
