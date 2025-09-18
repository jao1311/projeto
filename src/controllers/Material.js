import prisma from '../prisma.js';
export const MaterialController = {
    async store(req, res, next){
        try{

            const {name, type, pollutionLevel, weight, rewardPoints, amount} = req.body;
            
            const m = await prisma.material.create({
                data : {
                    name,
                    type,
                    pollutionLevel,
                    weight,
                    rewardPoints,
                    amount
                }
            });
            res.status(201).json(m);
        }catch(err){
            next(err);
        }
    },
    async index(req, res, next){

        let query = {};

        if (req.query.name) query = {name: {contains : req.query.name } };
        if (req.query.type) query = {type: req.query.type};
        if (req.query.pollutionLevel) query = {pollutionLevel: req.query.pollutionLevel};
        const materiais = await prisma.material.findMany({
            where: query
        })

        res.status(200).json(materiais);
    },
    async show(req, res, _next){
        try
        {
            const id = Number(req.params.id);

            let m = await prisma.material.findFirstOrThrow({
                where: { id }
            });

            res.status(200).json(m)
        }catch(err){
            res.status(404).json({error: "Não Encontrado"})
        }
    },
    async del(req, res, _next){
        try
        {
            const id = Number(req.params.id);

            let m = await prisma.material.delete({
                where: { id }
            });

            res.status(200).json(m)
        }catch(err){
            res.status(404).json({error: "Não Encontrado"})
        }
    }
}