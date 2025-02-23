import prisma from '@/configs/client'

export const getAllCategories = async () => {
    return await prisma.category.findMany({
        where: { active: true }
    })
}
