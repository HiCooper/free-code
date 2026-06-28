import { createMDX } from 'fumadocs-mdx/next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const config = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  images: { unoptimized: true },
};

const withMDX = createMDX();

export default withMDX(config);
