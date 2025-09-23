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
        const m = await prisma.material.findMany({
            where: query
        })

        res.status(200).json(m);
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
    },
    async upd(req, res, _next){
        try{
            const id = Number(req.params.id);

            let body = {};

            if (req.body.name)  body.name = req.body.name;
            if (req.body.type) body.type = req.body.type;
            if (req.body.pollutionLevel) body.pollutionLevel = req.body.pollutionLevel;
            if (req.body.weight) body.weight = req.body.weight;
            if (req.body.rewardPoints) body.rewardPoints = req.body.rewardPoints;
            if (req.body.amount) body.amount = req.body.amount;

            const m = await prisma.material.update({
                where: { id },
                data: body
            });
            res.status(200).json(m)
        }catch(err){
            console.log(err)
            res.status(404).json({error: "Não Encontrado"})
        }
    }
}