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
    async index(req, res, next){

        let query ={}

        if (req.query.userId) query = {userId: req.query.userId}
        if (req.query.machineId) query = {machineId: req.query.machineId}
        const descartes = await prisma.descarte.findMany()

        res.status(200).json(descartes)
    }
}