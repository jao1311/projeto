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
    async index(_req, res, next) {
        try {
            // aqui eu tenho que passar pelos 
            const machines = await prisma.machine.findMany();
            res.json(machines);
        } catch (err) {
            next(err);
        }
    }
}
