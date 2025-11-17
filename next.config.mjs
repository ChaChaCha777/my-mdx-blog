import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // .mdx拡張子のファイルを許可
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // オプションで、他のNext.js設定をここに追加してください
}
 
const withMDX = createMDX({})
 
// MDXとNext.js設定を統合
export default withMDX(nextConfig)