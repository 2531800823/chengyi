import { defineConfig } from 'umi';
import pxtoviewport from 'postcss-px-to-viewport';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  extraPostCSSPlugins: [
    pxtoviewport({
      unitToConvert: 'px',
      viewportWidth: 1080,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: undefined,
      include: undefined,
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 568,
    }),
  ],
});
