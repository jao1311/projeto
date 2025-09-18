import prisma from '../prisma.js';
export const DescarteController = {
    async store(req, res, next){
        try{

            const {userId, machineId} = req.body;
            
            const d = await prisma.descarte.create({
                data : {
                    userId: Number(userId),
                    machineId: Number(machineId)
                }
            });
            res.status(201).json(d);
        }catch(err){
            next(err);
        }
    },
    async index(req, res, _next){

        let query ={}

        if (req.query.userId) query = {userId: req.query.userId}
        if (req.query.machineId) query = {machineId: req.query.machineId}
        const descartes = await prisma.descarte.findMany()

        res.status(200).json(descartes)
    },
    async show(req, res, _next){
        try
        {
        const id = Number(req.params.id);

        let d = await prisma.descarte.findFirstOrThrow({
            where : { id }
        });

        res.status(200).json(d)
        }catch(err){
            res.status(404).json({error: "Não Encontrado"})
        }
    },
    async del(req, res, _next){
        try
        {
        const id = Number(req.params.id);

        let d = await prisma.descarte.delete({
            where : { id }
        });

        res.status(200).json(d)
        }catch(err){
            res.status(404).json({error: "Não Encontrado"})
        }
    }
}