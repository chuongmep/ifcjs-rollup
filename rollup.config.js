import resolve from '@rollup/plugin-node-resolve';
import css from'rollup-plugin-css-only'
import html from 'rollup-plugin-html';
import copy from 'rollup-plugin-copy';
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
    css({output:'bundle.css'}),
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
        { src: 'src/*.html', dest: 'dist' }, // Copy all HTML files from src to dist
        { src: './wasm', dest: 'dist' }, // Copy the entire 'wasm' folder
      ],
    }),
  ]
};