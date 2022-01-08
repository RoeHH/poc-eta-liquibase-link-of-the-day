
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
    await prisma.test.create({
        data: {
            name: 'Test',
            Test2: {
                createMany: {
                    data: [
                        {
                            name: 'Test2',
                        },
                        {
                            name: 'Test2.2',
                        },
                        {
                            name: 'Test2.3',
                        }
                    ]
                }
            },
        }
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
