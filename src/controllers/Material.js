import prisma from '../prisma';

async store(req, res, next){
    const {name, type, pollutionLevel, weight, rewardPoints, amount} = req.body;
    
    prisma.material.create(
        data : {name, type, pollutionLevel, weight, rewardPoints, amount}
    );
}