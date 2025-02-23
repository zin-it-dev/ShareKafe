import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('🔄 Seeding database...')

    await prisma.category.createMany({
        data: [
            { name: 'Cà Phê' },
            { name: 'Cà Phê Sáng Tạo' },
            { name: 'Trà Trái Cây' },
            { name: 'Trà Sữa' },
            { name: 'Cà Phê Đặc Biệt' },
            { name: 'Đá Xay' },
            { name: 'Nước Ép' },
            { name: 'Món Khác' }
        ],
        skipDuplicates: true
    })

    console.log('✅ Seeded Categories!')

    await prisma.item.createMany({
        data: [
            { name: 'Cà Phê Đen Nóng', price: 19000, categoryId: 1 },
            { name: 'Cà Phê Sữa Nóng', price: 22000, categoryId: 1 },
            { name: 'Cà Phê Đen Đá Sài Gòn', price: 26000, categoryId: 1 },
            { name: 'Cà Phê Sữa Đá Sài Gòn', price: 28000, categoryId: 1 },
            { name: 'Bạc Xỉu Nóng Đá', price: 29000, categoryId: 1 },
            { name: 'Capuchino', price: 39000, categoryId: 1 }
        ],
        skipDuplicates: true
    })

    console.log('✅ Seeded Items!')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
