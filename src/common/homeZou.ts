import Chbg from '@/assets/images/4-产品服务/策划-bg.png';
import Ch1 from '@/assets/images/4-产品服务/策划-产品策略.png';
import Ch2 from '@/assets/images/4-产品服务/策划-开发制作.png';
import Ch3 from '@/assets/images/4-产品服务/策划-项目沟通.png';
import Chfont from '@/assets/images/4-产品服务/Chfont.png';
import Ylfont from '@/assets/images/4-产品服务/Ylfont.png';
import Yyfont from '@/assets/images/4-产品服务/Yyfont.png';
import Yybg from '@/assets/images/4-产品服务/运营-bg.png';
import Yy1 from '@/assets/images/4-产品服务/运营-数据采集及分析.png';
import Yy2 from '@/assets/images/4-产品服务/运营-舆情监测.png';
import Yy3 from '@/assets/images/4-产品服务/运营-运营账号优化.png';
import Ylbg from '@/assets/images/4-产品服务/引流-bg.png';
import Yl1 from '@/assets/images/4-产品服务/引流-垂直平台.png';
import Yl2 from '@/assets/images/4-产品服务/引流-新媒体营销.png';
import Yl3 from '@/assets/images/4-产品服务/引流-线上epr品宣.png';

import { v4 } from 'uuid';
export const HomeZouStatic = [
  {
    id: v4(),
    url: Chbg,
    url2: Chfont,
    url2Style: 107,
    text: [
      {
        id: v4(),
        url: Ch3,
        text: '项目沟通',
        detail: '对项目从用户、客户、设计师、开发人员角度出发进行深度沟通了解。'
      },
      {
        id: v4(),
        url: Ch1,
        text: '产品策略',
        detail: '为企业制定合理可行的产品服务路线图，完整的项目产品服务方案。'
      },
      {
        id: v4(),
        url: Ch2,
        text: '开发制作',
        detail: '网站策划/制作 APP开发  小程序开发 CEM/EPR开发          '
      }
    ]
  },
  {
    id: v4(),
    url: Ylbg,
    url2: Ylfont,
    url2Style: 158,
    text: [
      {
        id: v4(),
        url: Yl3,
        text: '线上EPR品宣',
        detail: '口碑营销 站外SEO  百科 新闻发布'
      },
      {
        id: v4(),
        url: Yl2,
        text: '新媒体营销',
        detail: '新媒体内容/运营 双微运营 小红书 知乎  今日头条 抖音'
      },
      {
        id: v4(),
        url: Yl1,
        text: '垂直平台',
        detail: '美团 大众点评 SEM 信息流搭建运营 '
      }
    ]
  },
  {
    id: v4(),
    url: Yybg,
    url2: Yyfont,
    url2Style: 146,
    text: [
      {
        id: v4(),
        url: Yy1,
        text: '数据采集及分析',
        detail: '多渠道数据采集 (运营数据、官网等) 营销效果分析'
      },
      {
        id: v4(),
        url: Yy2,
        text: '舆情监测',
        detail: '24小时舆情监控系统 舆情公关处理'
      },
      {
        id: v4(),
        url: Yy3,
        text: '运营账号优化',
        detail: '根据各类账号数据分析结果，进行账号策略及内容持续优化更新。'
      }
    ]
  }
];
