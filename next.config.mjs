/** @type {import('next').NextConfig} */
const target = process.env.DEPLOY_TARGET // 'github-pages' | 'static' | undefined
const isGithubPages = target === 'github-pages'
const isStaticExport = target === 'github-pages' || target === 'static'

const nextConfig = {
  output: isStaticExport ? 'export' : undefined,
  basePath: isGithubPages ? '/pt-elgrano-garuda-angkasa' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? '/pt-elgrano-garuda-angkasa' : '',
  },
  images: {
    unoptimized: isStaticExport ? true : false,
  },
}

export default nextConfig