module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '53dfb332d0b0e02b0e18775bd02c49f0'),
  },
});
