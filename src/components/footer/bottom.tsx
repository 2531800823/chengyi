import { FC } from 'react';
import { vw } from '@/utils';
import { TabBar } from '@arco-design/mobile-react';
import { tabBarItem } from '@/common';

interface BottomProps {}

const Bottom: FC<BottomProps> = () => (
  <div className="bottom">
    <TabBar
      fixed={false}
      style={{ backgroundColor: '#2e6cf2', height: vw(172) }}>
      {tabBarItem.map((tab, index) => (
        <TabBar.Item
          style={{ borderLeft: index !== 0 ? `1px solid #7FA7F6` : 'none' }}
          title={tab.title}
          onClick={tab?.onClick}
          icon={tab.icon}
          key={index}
        />
      ))}
    </TabBar>
  </div>
);

export default Bottom;
