import { removeItemFromWishlist } from '../../../prisma/operations';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      await removeItemFromWishlist(id);
      res.status(204).end();  // No content
    } catch (error) {
      res.status(500).json({ error: 'Failed to remove item from wishlist' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
