import resolve from '@rollup/plugin-node-resolve';
import css from'rollup-plugin-css-only'
import html from 'rollup-plugin-html';
import copy from 'rollup-plugin-copy';
// import serve from 'rollup-plugin-serve';
// import livereload from 'rollup-plugin-livereload';
export default {
  input: './src/index.js',
  output: [
    {
      format: 'esm',
      file: './dist/bundle.js',
      inlineDynamicImports: true
    },
  ],
  plugins: [
    resolve(),
    css({ output: 'dist/bundle.css' }),
    html({
      include: '**/*.html',
      htmlMinifierOptions: {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        conservativeCollapse: true,
        minifyCSS: true,
        minifyJS: true,
      }
    }),
    copy({
      targets: [
        {src: 'src/icon.png', dest: 'dist'},
        { src: 'src/*.html', dest: 'dist' }, // Copy all HTML files from src to dist
        { src: './wasm', dest: 'dist' }, // Copy the entire 'wasm' folder
      ],
    }),
    // serve({
    //   open: true,
    //   contentBase: 'dist',
    //   port: 3000, // Choose the port you prefer
    // }),
    // livereload('dist'),
  ]
};