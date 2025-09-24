import prisma from '../prisma.js';

export const EnterpriseController = {

    async store(req, res, next){
        try{

            const { cnpj, adress, area, name, urlImage, isActive } = req.body;
        
            

            const e = await prisma.enterprise.create({
                data: {cnpj, adress, area, name, urlImage, isActive }
            });
    
            res.status(201).json(e)
        }catch(err){
            next(err)
        }
    },
     async index(req, res, next){
        let query = {}

        if(req.query.name) query = {name: {contains : req.query.name } }
        if(req.query.area) query = {area:req.query.area}


        const enterprises = await prisma.enterprise.findMany({
            where: query
        })

        res.status(200).json(enterprises)
     },

     async show(req, res, _next){
        try{

            const id = Number(req.params.id) 
    
            let e = await prisma.enterprise.findFirstOrThrow({

                where: {id}
            })
    
            res.status(200).json(e)
        }catch(err){
            res.status(404).json({error:"Não encontrado"})
        }
     },

     async del(req, res, next){
        try{

            const id = Number(req.params.id) 
    
            let e = await prisma.enterprise.delete({

                where: {id}
            })
    
            res.status(200).json(e)
        }catch(err){
            res.status(404).json({error:"Não encontrado"})
        }
     },

     async update(req, res, _next){
        try{

            const id = Number(req.params.id)

            let body = {}

        if(req.body.adress) body.adress = req.body.adress 
        if(req.body.area) body.area = req.body.area
        if(req.body.cnpj) body.cnpj = req.body.cnpj
        if(req.body.name) body.name = req.body.name
        if(req.body.urlImage) body.urlImage = req.body.urlImage
        if(req.body.isActive) body.isActive = req.body.isActive




    
            let e = await prisma.enterprise.update({

                where: {id},
                data: body

                
            });
    
            res.status(200).json(e)
        }catch(err){
            console.log(err)
            res.status(404).json({error:"Não encontrado"})
        }
     }
}
