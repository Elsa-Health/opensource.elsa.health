
const withImages = require('next-images')
const withMdx = require('@next/mdx')({
    extension: /\.(md|mdx)$/
})

module.exports = withImages(withMdx({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
}))