import prisma from '../prisma';

async store(req, res, next){
    const { cnpj, adress, area, name, urlImage, isActive } = req.body;

    prisma.enterprise.create();
}