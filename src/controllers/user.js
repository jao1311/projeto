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
        let query = {}

        if (req.query.name) query.name = {contains: req.query.name}

        const users = await prisma.user.findMany({
            where: query 
        })

        res.status(200).json(users)
    },

    async show(req, res, _next){
        try{
            const id = Number( req.params.id)

            let u = await prisma.user.findFirstOrThrow({where: {id}})

            res.status(200).json(u)
        }catch(err){
            res.status(404).json({error:"Não encontrado"});
        }
    },

    async del(req, res, _next){
        try{
            const id = Number( req.params.id)

            const u = await prisma.user.delete({where: {id}})

            res.status(200).json(u)
        }catch(err){
            res.status(404).json({error:"Não encontrado"});
        }
    },


    async upd(req, res, _next){
        try{
            const id = Number( req.params.id)

            let body = {};

            if (req.body.name) body.name = req.body.name
            if (req.body.email) body.email = req.body.email
            if (req.body.cpf) body.cpf = req.body.cpf
            if (req.body.phone) body.phone = req.body.phone

            const u = await prisma.user.update({
                where: { id },
                data: body
            });

            res.status(200).json(u)
        }catch(err){
            res.status(404).json({error:"Não encontrado"});
        }
    },
}            
