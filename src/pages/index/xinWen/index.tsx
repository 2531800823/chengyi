import { FC, memo, useState } from 'react';
import { MyText } from '@/components/text';
import { Button, Tabs } from '@arco-design/mobile-react';
import { vw } from '@/utils';
import { history } from 'umi';

import Font from '@/assets/images/5-新闻资讯/xinFont.png';
import Img from '@/assets/images/5-新闻资讯/news.png';
import { TabDiv, Wapper, XinWenItemDiv } from './style';

const tabData = [
  { title: '营销观点' },
  { title: '澄易新闻' },
  { title: '营销百科' }
];
interface XinWenProps {}

const XinWen: FC<XinWenProps> = memo(() => {
  const [active, setActive] = useState(0);

  const hanldeClick = (index: number) => {
    setActive(index);
  };
  return (
    <Wapper>
      <MyText url={Font} width={465} height={140} />

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
              justifyContent: 'space-between'
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
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} style={{ width: '100%' }}>
              {Array(4)
                .fill(0)
                .map((item, index) => (
                  <XinWenItemDiv key={index}>
                    <img src={Img} alt="" />
                    <div>
                      <h3>
                        24 <span> / Jul./2022</span>
                      </h3>
                      <p>疫情之下互联网逆流而上，“ 全网品牌...</p>
                      <div className="text">
                        疫情的蔓延，极大地冲击了原本的社会生活服务体系，多地暂停了正常的线下社交沟通，很多活动、交易都被迫取消，但网上一切照常...{' '}
                      </div>
                    </div>
                  </XinWenItemDiv>
                ))}
            </div>
          ))}
      </Tabs>

      <div
        style={{ width: '100%', textAlign: 'center', marginTop: vw(58) }}
        onClick={() => {
          history.push('/news');
        }}>
        <Button inline shape="round" style={{ width: vw(390) }}>
          了解更多
        </Button>
      </div>
    </Wapper>
  );
});

export default XinWen;
