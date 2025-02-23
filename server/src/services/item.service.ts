import prisma from '@/configs/client'

export const getAllItems = async () => {
    return await prisma.item.findMany({
        where: { active: true },
        select: {
            id: true,
            name: true,
            category: {
                select: {
                    name: true
                }
            }
        }
    })
}
