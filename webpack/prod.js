import { resolve } from 'node:path';
import { merge } from 'webpack-merge';
import commonConfig from './common.js';
import { createCopyPlugin } from './plugins/index.js';
const prodConfig = merge(commonConfig, {
  mode: 'production',
  output: {
    ...commonConfig.output,
    path: resolve('build'),
  },
  plugins: [
    ...commonConfig.plugins,
    createCopyPlugin(),
  ].filter(Boolean),
});

export default prodConfig;
