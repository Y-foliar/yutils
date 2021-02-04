export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/yutils-cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/yutils-es.js',
      format: 'es'
    }
  ]
}