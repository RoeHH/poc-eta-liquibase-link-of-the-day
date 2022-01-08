import express from 'express';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

let router = express.Router();

// Handling '/' Request
router.get('/', async (req, res) => {
    let ding = await prisma.test.findMany({ include: { Test2: { take: 2 } } })
    res.send(ding[1].Test2[0].name)
});

export = router;