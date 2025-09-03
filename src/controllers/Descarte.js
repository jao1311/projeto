import e from 'cors';
import prisma from '../prisma';
export const DescarteController = {
    async store(req, res, next){
        try{

            const {userId, machineId} = req.body;
            
            const d = await prisma.material.create({
                data : {
                    userId,
                    machineId
                }
            });
            res.status(201).json(d);
        }catch(err){
            next(err);
        }
    }
}