import express from 'express';

var router = express.Router();


// Handling '/' Request
router.get('/', (req:any, res:any) => {
    linkOfDayDB.select('*').then((rows:any) => {
        res.json(rows);
    });
});

export = router;