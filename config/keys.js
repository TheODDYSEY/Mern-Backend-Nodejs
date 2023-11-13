require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGO_DB_URL,
    secretOrKey: process.env.SECRET_KEY
  };