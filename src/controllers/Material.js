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
    }
}