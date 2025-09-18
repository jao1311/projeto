import prisma from '../prisma.js';

export const MachineController = {
    async store(req, res, next) {
        try {
            const {  name, status, amoutn, enterpriseId } = req.body;

            const machine = await prisma.machine.create({
                data: {
                   
                    name,
                    status,
                    amoutn,
                    enterpriseId,
                }
            });

            res.status(201).json(machine);
        } catch (err) {
            next(err);
        }
    },

    async index(req, res, next) {
        try {
            const where = {};
        
            if (req.query.name) where.name = { contains: req.query.name };
            if (req.query.status) where.status = req.query.status;
            if (req.query.amoutn) where.amoutn = Number(req.query.amoutn);
            if (req.query.enterpriseId) where.enterpriseId = Number(req.query.enterpriseId);

            const machines = await prisma.machine.findMany({
                where
            });

            res.status(200).json(machines);
        } catch (err) {
            next(err);
        }
    }
    ,
    async show(req, res, _next){
        try {
        const id = Number(req.params.id);
    
        const machine = await prisma.machine.findFirstOrThrow({  where: {id} });
      
        res.status(200).json(machine);
        } catch (err) {
            res.status(404).json({error: "Machine not found!"})
     }
    }
    


    ,
    async delete(req, res, _next){
        try {
        const id = Number(req.params.id);
    
        // garante que existe e deleta
        const deleted = await prisma.machine.delete({ where: { id } });
      
        res.status(200).json(deleted);
        } catch (err) {
            res.status(404).json({error: "Machine not found!"})
     }
    }
    
    ,

    async update(req, res, _next){
        try {
        const id = Number(req.params.id);
 
        const { name, status, amoutn, enterpriseId } = req.body;
    
        // garante que existe e atualiza
        const updated = await prisma.machine.update({
            where: { id },
            data: {
                name,
                status,
                amoutn,
                enterpriseId
            }
         });
      
        res.status(200).json(updated);
        } catch (err) {
            res.status(404).json({error: "Machine not found!"})
     }
    }

}