import prisma from '../prisma.js';

export const EnterpriseController = {

    async store(req, res, next){
        try{

            const { cnpj, adress, area, name, urlImage, isActive } = req.body;
        
            const e = await prisma.enterprise.create({
                data: {cnpj, adress, area, name, urlImage, isActive }
            });
    
            res.status(201).json(u)
        }catch(err){
            next(err)
        }
    },
     async index(req, res, next){
        const enterprises = await prisma.enterprise.findMany()

        res.status(200).json(enterprises)
     },
    }
