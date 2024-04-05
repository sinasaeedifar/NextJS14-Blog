/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                hostname: "images.freeimages.com",
                protocol: "https"
            },
            {
                hostname: "plus.unsplash.com",
                protocol: "https"
            }
        ]
    }

};

export default nextConfig;
