// vou ter que criar uma rota para cadastrar maquinas e já fiz o post quero agora fazer o get

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
            let query = {};
        
            if (req.query.name) query = { name: {contains: req.query.name} };
            if (req.query.status) query = {status: req.query.status}
            if (req.query.amoutn) query = {amoutn: req.query.amoutn}
            if (req.query.enterpriseId) query = {enterpriseId: req.query.enterpriseId}

            const machines = await prisma.machine.findMany({
                where: query
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
    
}