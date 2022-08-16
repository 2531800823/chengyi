import { Tabs } from '@arco-design/mobile-react';
import { FC, useState, Fragment } from 'react';
import { TabDiv, TabDivShu, Wapper, XinWenItemDiv } from './style';

import Img from '@/assets/images/5-新闻资讯/news.png';
import Img2 from '@/assets/images/5-新闻资讯/jiantou.png';
import { vw } from '@/utils';

interface NewsProps {}
const tabData = [
  { title: '营销观点' },
  { title: '澄易新闻' },
  { title: '营销百科' }
];
const News: FC<NewsProps> = (props) => {
  const {} = props;
  const [active, setActive] = useState(0);
  console.log('News');
  const hanldeClick = (index: number) => {
    setActive(index);
  };
  return (
    <Wapper>
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
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            {tabData.map((item, index) => (
              <Fragment key={index}>
                {index !== 0 && <TabDivShu />}
                <TabDiv
                  active={active === index}
                  onClick={() => hanldeClick(index)}>
                  {item.title}
                </TabDiv>
              </Fragment>
            ))}
          </div>
        )}>
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i}>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <XinWenItemDiv key={index}>
                    <img src={Img} alt="" />
                    <div className="ke">
                      <h3>
                        24 <span> / Jul./2022</span>
                      </h3>
                      <p>
                        疫情之下互联网逆流而上，“全网品牌传播”或为企业营销困...
                      </p>
                      <div className="text">
                        疫情的蔓延，极大地冲击了原本的社会生活服务体系，多地暂停了正常的线下社交沟通，很多活动、交易都被迫取消，但网上一切照常...
                        环境改变催生了新的消费模式，居家“宅经济”推动服务业数字化转型，互联网载体迎来一波爆炸式增长，人们的生活对网络的依赖性更强了。
                      </div>
                      <div className="jiantou">
                        <span style={{ position: 'relative' }}>
                          READ MORE
                          <img src={Img2} alt="" />
                        </span>
                      </div>
                    </div>
                  </XinWenItemDiv>
                ))}
            </div>
          ))}
      </Tabs>
    </Wapper>
  );
};

export default News;
