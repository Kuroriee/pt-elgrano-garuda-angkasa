/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GANTI '/pt-elgrano-garuda-angkasa' dengan nama repo GitHub kamu yang sebenarnya.
  // Kalau nama repo-nya PERSIS "username.github.io", hapus baris basePath ini.
  basePath: '/pt-elgrano-garuda-angkasa',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
