// middlewares/validate.js
module.exports = (req, res, next) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    next();
  };
  