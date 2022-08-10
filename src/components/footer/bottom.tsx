import { FC } from 'react';
interface BottomProps {}
import Home from '@/../public/images/7-页底/页底-首页-1.png';
import Call from '@/../public/images/7-页底/页底-电话-2.png';
import Message from '@/../public/images/7-页底/页底-咨询-3.png';
import Diagnose from '@/../public/images/7-页底/页底-诊断-4.png';

const tabs = [
  {
    key: 'home',
    title: '首页',
    icon: <img src={Home} alt="" />
  },
  {
    key: 'todo',
    title: '我的待办',
    icon: <img src={Call} alt="" />
  },
  {
    key: 'message',
    title: '我的消息',
    icon: <img src={Message} alt="" />
  },
  {
    key: 'personalCenter',
    title: '个人中心',
    icon: <img src={Diagnose} alt="" />
  }
];

const Bottom: FC<BottomProps> = (props) => {
  const {} = props;
  console.log('Bottom');
  return (
    <div className="bottom">
      <TabBar fixed={false}>
        {tabs.map((tab, index) => (
          <TabBar.Item
            title={tab.title}
            icon={tab.icon}
            key={index}></TabBar.Item>
        ))}
      </TabBar>
    </div>
  );
};

export default Bottom;
