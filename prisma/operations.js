import { PrismaClient } from '@prisma/client';
import * as yup from 'yup';

const prisma = new PrismaClient();

// Validation schema for product data
const productSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().positive().required(),
  image: yup.string().url().required(),
});

// Create a new product
export const createProduct = async (data) => {
  try {
    await productSchema.validate(data);
    return await prisma.product.create({ data });
  } catch (error) {
    throw new Error('Validation failed: ' + error.message);
  }
};

// Get all products
export const getProducts = async () => {
  return await prisma.product.findMany();
};

// Get a product by ID
export const getProduct = async (id) => {
  return await prisma.product.findUnique({ where: { id } });
};

// Update a product by ID
export const updateProduct = async (id, data) => {
  try {
    await productSchema.validate(data);
    return await prisma.product.update({ where: { id }, data });
  } catch (error) {
    throw new Error('Validation failed: ' + error.message);
  }
};

// Delete a product by ID
export const deleteProduct = async (id) => {
  return await prisma.product.delete({ where: { id } });
};

// Add item to cart
export const addItemToCart = async (userId, productId) => {
  return await prisma.cart.create({
    data: {
      userId,
      productId,
    },
  });
};

// Remove item from cart
export const removeItemFromCart = async (id) => {
  return await prisma.cart.delete({
    where: { id },
  });
};

// Get cart items for a user
export const getCartItems = async (userId) => {
  return await prisma.cart.findMany({
    where: { userId },
    include: { product: true },
  });
};

// Add item to wishlist
export const addItemToWishlist = async (userId, productId) => {
  return await prisma.wishlist.create({
    data: {
      userId,
      productId,
    },
  });
};

// Remove item from wishlist
export const removeItemFromWishlist = async (id) => {
  return await prisma.wishlist.delete({
    where: { id },
  });
};

// Get wishlist items for a user
export const getWishlistItems = async (userId) => {
  return await prisma.wishlist.findMany({
    where: { userId },
    include: { product: true },
  });
};
