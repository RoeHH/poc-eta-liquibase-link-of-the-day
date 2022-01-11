
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

var date1 = new Date();
date1.setMinutes(date1.getMinutes()-5);

const main = async () => {
    await prisma.links.createMany({
        data: [{
            link: "https://www.youtube.com/watch?v=Oszl95YWfbs"
        },
        {
            link: "https://www.youtube.com/watch?v=HeWX-lppv70",
            createdAt: date1
        }
    ]
    })
};

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
