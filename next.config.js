/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve = {
            ...config.resolve,
            fallback: {
                fs: false,
            },
        };
        return config;
    },
    async rewrites() {
        return [
            {
                source: '/ingest/static/:path*',
                destination: 'https://us-assets.i.posthog.com/static/:path*'
            },
            {
                source: '/ingest/:path*',
                destination: 'https://us.i.posthog.com/:path*'
            },
            {
                source: '/ingest/decide',
                destination: 'https://us.i.posthog.com/decide'
            }
        ];
    },
};

module.exports = nextConfig;
