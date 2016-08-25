module.exports = {
  host: process.env.MONGODB_URL || 'localhost',
  database: process.env.MONGODB_DATABASE || 'test',
  port: false
}
