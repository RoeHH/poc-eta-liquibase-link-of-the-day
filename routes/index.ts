import express from 'express';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

let router = express.Router();

router.get('/', async (req, res) => {
    let reDirLink = (await prisma.links.findMany()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())[0]
    res.redirect(reDirLink.link);
});


export = router;