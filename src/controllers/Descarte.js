import prisma from '../prisma.js';
export const DescarteController = {
    async store(req, res, next){
        try{

            const {userId, machineId} = req.body;
            
            const d = await prisma.material.create({
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
        const descartes = await prisma.descarte.findMany()

        res.status(200).json(descartes)
    }
}