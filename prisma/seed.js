// prisma/seed.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const dresses = [
    { name: 'Elegant Evening Gown', description: 'Perfect for formal events.', price: 199.99, image: '/images/dress1.jpg' },
    { name: 'Summer Floral Dress', description: 'Light and breezy for the summer.', price: 59.99, image: '/images/dress2.jpg' },
    { name: 'Classic Little Black Dress', description: 'A timeless classic.', price: 89.99, image: '/images/dress3.jpg' },
    { name: 'Boho Maxi Dress', description: 'Relaxed fit with a boho vibe.', price: 79.99, image: '/images/dress4.jpg' },
    { name: 'Cocktail Party Dress', description: 'Chic and fun for any party.', price: 129.99, image: '/images/dress5.jpg' },
    { name: 'Casual T-Shirt Dress', description: 'Comfortable for everyday wear.', price: 39.99, image: '/images/dress6.jpg' },
    { name: 'Vintage Polka Dot Dress', description: 'A retro-style dress.', price: 69.99, image: '/images/dress7.jpg' },
    { name: 'Off-Shoulder Ruffle Dress', description: 'Stylish and trendy.', price: 99.99, image: '/images/dress8.jpg' },
    { name: 'Formal Business Dress', description: 'Perfect for the office.', price: 149.99, image: '/images/dress9.jpg' },
    { name: 'Lace Wedding Dress', description: 'Beautiful lace details.', price: 299.99, image: '/images/dress10.jpg' },
    { name: 'Beach Cover-Up Dress', description: 'Lightweight for the beach.', price: 29.99, image: '/images/dress11.jpg' },
    { name: 'Denim Shirt Dress', description: 'Casual and cool.', price: 49.99, image: '/images/dress12.jpg' },
    { name: 'Chiffon Bridesmaid Dress', description: 'Elegant for any wedding.', price: 139.99, image: '/images/dress13.jpg' },
    { name: 'Sundress with Pockets', description: 'Functional and cute.', price: 44.99, image: '/images/dress14.jpg' },
    { name: 'Velvet Evening Dress', description: 'Luxurious velvet material.', price: 219.99, image: '/images/dress15.jpg' },
    { name: 'Floral Wrap Dress', description: 'Flattering wrap style.', price: 69.99, image: '/images/dress16.jpg' },
    { name: 'Striped Midi Dress', description: 'Modern and versatile.', price: 64.99, image: '/images/dress17.jpg' },
    { name: 'Embroidered Tunic Dress', description: 'Intricate embroidery.', price: 89.99, image: '/images/dress18.jpg' },
    { name: 'Shift Dress with Bell Sleeves', description: 'Unique and stylish.', price: 79.99, image: '/images/dress19.jpg' },
    { name: 'Ruffled Hem Dress', description: 'Playful ruffle details.', price: 59.99, image: '/images/dress20.jpg' },
    { name: 'Peplum Dress', description: 'Flattering peplum style.', price: 99.99, image: '/images/dress21.jpg' },
    { name: 'Sequin Party Dress', description: 'Sparkling sequins.', price: 189.99, image: '/images/dress22.jpg' },
    { name: 'Denim Overall Dress', description: 'Casual and cute.', price: 54.99, image: '/images/dress23.jpg' },
    { name: 'Tulle Skater Dress', description: 'Fun and flirty.', price: 109.99, image: '/images/dress24.jpg' },
    { name: 'Halter Neck Dress', description: 'Stylish halter neckline.', price: 89.99, image: '/images/dress25.jpg' },
    { name: 'Knitted Bodycon Dress', description: 'Perfect for colder weather.', price: 79.99, image: '/images/dress26.jpg' },
    { name: 'Button-Down Shirt Dress', description: 'A classic staple.', price: 59.99, image: '/images/dress27.jpg' },
    { name: 'Plaid Flannel Dress', description: 'Great for fall and winter.', price: 69.99, image: '/images/dress28.jpg' },
    { name: 'Backless Evening Dress', description: 'Daring and elegant.', price: 199.99, image: '/images/dress29.jpg' },
    { name: 'Empire Waist Dress', description: 'Flattering for all body types.', price: 89.99, image: '/images/dress30.jpg' },
  ];

  for (const dress of dresses) {
    await prisma.product.create({
      data: dress,
    });
  }

  console.log('30 dresses seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
