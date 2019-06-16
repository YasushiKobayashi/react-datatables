import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babili from 'rollup-plugin-babili';
import { dts } from 'rollup-plugin-dts';

const plugins = [
  nodeResolve({
    include: 'node_modules/**',
    namedExports: {
      'node_modules/react/index.js': ['Component', 'PropTypes', 'createElement'],
    },
  }),
  commonjs({ jsnext: false }),
  typescript({
    tsconfig: 'tsconfig.json',
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(babili({ comments: false }));
}

export default [
  {
    input: './src/DataTablesReact.tsx',
    output: [
      {
        sourcemap: true,
        name: 'DataTablesReact',
        file: './dist/datatables-react.js',
        format: 'cjs',
        global: {
          react: 'React',
        },
      },
    ],
    external: ['react'],
    plugins,
  },
  {
    input: './src/DataTablesReact.tsx',
    output: [{ file: 'dist/datatables-react.d.ts', format: 'umd' }],
    external: ['react', 'react-is'],
    plugins: [dts()],
  },
];
