module.exports = {
  host: process.env.MONGODB_URL || 'localhost',
  database: process.env.JWT_SECRET || 'test',
  port: false
}
