import { addItemToWishlist, getWishlistItems } from '../../../prisma/operations';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { userId, productId } = req.body;
      const wishlistItem = await addItemToWishlist(userId, productId);
      res.status(201).json(wishlistItem);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add item to wishlist' });
    }
  } else if (req.method === 'GET') {
    try {
      const { userId } = req.query;
      const wishlistItems = await getWishlistItems(userId);
      res.status(200).json(wishlistItems);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch wishlist items' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
