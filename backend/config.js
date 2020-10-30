export default {
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/weShare',
  JWT_SECRET: process.env.JWT_SECRET || 'shhh',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb'
}