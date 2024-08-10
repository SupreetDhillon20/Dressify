// pages/api/products/index.js
import { createProduct, getProducts } from '../../../prisma/operations';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const product = await createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create product' });
    }
  } else if (req.method === 'GET') {
    try {
      const allProducts = await getProducts();
      
      // Implement pagination logic
      const page = parseInt(req.query.page) || 1;
      const pageSize = 10; // Number of products per page
      const totalProducts = allProducts.length;
      const totalPages = Math.ceil(totalProducts / pageSize);
      const paginatedProducts = allProducts.slice((page - 1) * pageSize, page * pageSize);

      res.status(200).json({ products: paginatedProducts, totalPages });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
