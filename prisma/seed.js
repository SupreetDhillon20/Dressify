// prisma/seed.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = Array.from({ length: 30 }, (_, i) => ({
    name: `Product ${i + 1}`,
    description: `Description for product ${i + 1}`,
    price: 100 + i * 10,
    image: `/images/product${(i % 10) + 1}.jpg`,
  }));

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log('30 products seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
