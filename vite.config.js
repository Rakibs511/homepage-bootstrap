const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  base:'/homepage-bootstrap',
  build: {
    outDir: '../dist'
  },
  server: {
    port: 3000
  }
}