/** @type {import('next').NextConfig} */
const nextConfig = {};
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["res.cloudinary.com"], // Add Cloudinary domain or your image hosting domain here
  },
};
module.exports = nextConfig;
