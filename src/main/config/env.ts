export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/portfolio-backend',
  port: process.env.PORT || 3050,
  jwtSecret: process.env.JWT_SECRET || 'Dj201119==5G'
}
