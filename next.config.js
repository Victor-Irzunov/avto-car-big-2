// /next.config.js — обновляем список хостов для картинок и добавляем www-вариант
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Для /uploads мы будем использовать unoptimized, но оставим внешние домены на будущее
    remotePatterns: [
      // продакшен (IDN в punycode) с www и без
      { protocol: 'https', hostname: 'xn--80aaf6atok.xn--90ais' },
      { protocol: 'https', hostname: 'www.xn--80aaf6atok.xn--90ais' },

      // локальная разработка
      { protocol: 'http', hostname: 'localhost', pathname: '/uploads/**' },
      { protocol: 'http', hostname: '127.0.0.1', pathname: '/uploads/**' },
    ],
    // на всякий случай ограничим набор размеров, чтобы снизить нагрузку
    deviceSizes: [360, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
