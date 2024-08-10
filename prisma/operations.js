// prisma/operations.js
import * as yup from 'yup';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new user
export const createUser = async (data) => {
  return await prisma.user.create({ data });
};

// Get a user by ID
export const getUser = async (id) => {
  return await prisma.user.findUnique({ where: { id } });
};

// Create a new product
export const createProduct = async (data) => {
  return await prisma.product.create({ data });
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
  return await prisma.product.update({ where: { id }, data });
};

// Delete a product by ID
export const deleteProduct = async (id) => {
  return await prisma.product.delete({ where: { id } });
};
