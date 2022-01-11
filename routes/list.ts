import express from 'express';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

let router = express.Router();

router.get('/', async (req, res) => {
    let links = await prisma.links.findMany();
    res.render('list', { links });
});

export = router;