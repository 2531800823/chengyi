import {defineConfig} from 'umi';
import pxtoviewport from 'postcss-px-to-viewport';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none'
  },
  // routes: [{path: '/', component: '@/layouts'}],
  // 指定输出路径
  outputPath: '/dist',
  // 本地开发API接口请求代理
  proxy: {
    '/api': {
      target: 'http:www.xxx.com/',
      changeOrigin: true,
      pathRewrite: {'^/api': ''}
    }
  },
  // 快速刷新(开发时可以保持组件状态，同时编辑提供即时反馈。)
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
      landscapeWidth: 568
    })
  ]
});
