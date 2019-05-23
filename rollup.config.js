import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babili from 'rollup-plugin-babili';
import { dts } from 'rollup-plugin-dts';

const plugins = [nodeResolve(), commonjs({ jsnext: true }), typescript()];

if (process.env.NODE_ENV === 'production') {
  plugins.push(babili({ comments: false }));
}

export default [
  {
    input: './src/index.tsx',
    output: [
      {
        sourcemap: true,
        name: 'DataTablesReact',
        file: './dist/datatables-react.js',
        format: 'umd',
        global: {
          react: 'React',
        },
      },
    ],
    external: ['react', 'react-is'],
    plugins,
  },
  {
    input: './src/index.tsx',
    output: [
      {
        name: 'DataTablesReact',
        file: './dist/index.js',
        format: 'esm',
      },
    ],
    external: ['react', 'react-is'],
    plugins,
  },
  {
    input: './src/index.tsx',
    output: [{ file: 'dist/datatables-react.d.ts', format: 'es' }],
    external: ['react', 'react-is'],
    plugins: [dts()],
  },
];
