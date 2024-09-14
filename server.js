require('dotenv').config(); // Ensure this is at the top

const app = require("./app");
const PORT = process.env.PORT || 3003; // Use PORT from .env or default to 3002

app.listen(PORT, () => {
  console.log(`Server is running. Use our API on port: ${PORT}`);
});
