import prisma from '../prisma.js';

export const MachineController = {
    async store(req, res, next) {
        try {
            const { id, name, type, status, amount } = req.body;

            const machine = await prisma.machine.create({
                data: {
                    id,
                    name,
                    type,
                    status,
                    amount
                }
            });

            res.status(201).json(machine);
        } catch (err) {
            next(err);
        }
    }
}