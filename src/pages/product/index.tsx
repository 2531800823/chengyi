import { vw } from '@/utils';
import { Tabs } from '@arco-design/mobile-react';
import React, { FC, memo, useState } from 'react';
import { TabDiv } from '../index/xinWen/style';
import Develop from './develop';
import Praise from './praise';
import Promotion from './promotion';

interface ProductProps {}

const tabData = [
  { title: '系统开发' },
  { title: '口碑营销' },
  { title: '推广托管' }
];

const Product: FC<ProductProps> = memo(() => {
  const [active, setActive] = useState(0);
  const hanldeClick = (index: number) => {
    setActive(index);
  };
  return (
    <div>
      <Tabs
        tabs={tabData}
        style={{ width: '100%' }}
        translateZ={false}
        type="tag-divide"
        activeTab={active}
        renderTabBarInner={() => (
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              padding: vw('60 100 0')
            }}>
            {tabData.map((item, index) => (
              <TabDiv
                active={active === index}
                key={index}
                onClick={() => hanldeClick(index)}>
                {item.title}
              </TabDiv>
            ))}
          </div>
        )}>
        {[<Develop key={0} />, <Praise key={1} />, <Promotion key={2} />].map(
          (Com, i) => (i === active ? Com : null)
        )}
      </Tabs>
    </div>
  );
});

export default Product;
