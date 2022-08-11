import Home from '@/../public/images/7-页底/页底-首页-1.png';
import Call from '@/../public/images/7-页底/页底-电话-2.png';
import Consult from '@/../public/images/7-页底/页底-咨询-3.png';
import Diagnose from '@/../public/images/7-页底/页底-诊断-4.png';
import { vw } from '@/utils';
import { history } from 'umi';
const tabBarTitles = [
  {
    key: 'home',
    title: '首页',
    img: Home,
    onClick: () => {
      window.scrollTo(0, 0);
      history.push('/');
    }
  },
  {
    key: 'todo',
    title: '电话',
    img: Call
  },
  {
    key: 'consult',
    title: '咨询',
    img: Consult
  },
  {
    key: 'personalCenter',
    title: '诊断',
    img: Diagnose
  }
];

export const tabBarItem = tabBarTitles.map((item) => ({
  ...item,
  icon: (
    <img
      style={{ width: vw(68), display: 'block' }}
      src={item.img}
      alt={item.title}
    />
  ),
  title: (
    <p style={{ marginTop: vw(10), fontSize: vw(30), color: '#fff' }}>
      {item.title}
    </p>
  )
}));

export const menuStatic = [
  { name: '首页', key: '/' },
  { name: '体验咨询', key: '/experience' },
  {
    name: '产品服务',
    children: [
      { name: '推广托管', key: '/promotion' },
      { name: '口碑营销', key: '/praise' },
      { name: '系统开发', key: '/develop' }
    ]
  },
  { name: '关于澄易', key: '/about' },
  { name: '新闻资讯', key: '/news' }
];
