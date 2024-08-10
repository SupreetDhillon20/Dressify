import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (data) => {
  return await prisma.user.create({ data });
};

export const getUserByEmail = async (email) => {
  return await prisma.user.findUnique({ where: { email } });
};

export const createProduct = async (data) => {
  return await prisma.product.create({ data });
};

export const getProducts = async () => {
  return await prisma.product.findMany();
};

export const getProductById = async (id) => {
  return await prisma.product.findUnique({ where: { id } });
};

export const createOrder = async (data) => {
  return await prisma.order.create({ data });
};

export const addItemToWishlist = async (userId, productId) => {
  return await prisma.wishlist.update({
    where: { userId },
    data: { products: { connect: { id: productId } } },
  });
};

export const removeItemFromWishlist = async (userId, productId) => {
  return await prisma.wishlist.update({
    where: { userId },
    data: { products: { disconnect: { id: productId } } },
  });
};
