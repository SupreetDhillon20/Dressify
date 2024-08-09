export default function handler(req, res) {
  const { id } = req.query;
  const products = [
    { id: 1, name: 'Product 1', description: 'Description for product 1', price: 100, image: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', description: 'Description for product 2', price: 150, image: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', description: 'Description for product 3', price: 200, image: '/images/product3.jpg' },
    // Add more products as needed
  ];

  const product = products.find(p => p.id === parseInt(id));
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
}

