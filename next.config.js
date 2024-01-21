/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'build',
    basePath: '/hafnon-docs',
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig;
