// middleware/validateProduct.js
const validateProduct = (req, res, next) => {
  const { id, name, price, category } = req.body;

  if (!id || !name || !price || !category) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  if (typeof price !== 'number' || price < 0) {
    return res.status(400).json({ message: 'Price must be a positive number' });
  }

  next();
};

module.exports = validateProduct;
