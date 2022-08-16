import { MyABout } from '@/components';
import { MyText } from '@/components/text';
import { FC, memo } from 'react';
import { Wapper, YeWuDiv } from './style';
import { vw } from '@/utils';
import { history } from 'umi';

import Img1 from '@/assets/images/4-关于我们/01.png';
import Img2 from '@/assets/images/4-关于我们/02.png';
import Img3 from '@/assets/images/4-关于我们/03.png';
import Img4 from '@/assets/images/4-关于我们/01-系统开发-icon.png';
import Img5 from '@/assets/images/4-关于我们/02-口碑营销-icon.png';
import Img6 from '@/assets/images/4-关于我们/03-推广托管-icon.png';
import Img7 from '@/assets/images/4-关于我们/企业文化.png';
import Img8 from '@/assets/images/4-关于我们/圆圈.png';
import ImgF from '@/assets/images/4-关于我们/AboutFont.png';
import ImgF1 from '@/assets/images/4-关于我们/YwFont2.png';
import { Button } from '@arco-design/mobile-react';

interface AbooutProps {}

const Aboout: FC<AbooutProps> = memo(() => {
  console.log('Aboout');
  return (
    <div>
      <MyABout />
      <MyText url={ImgF} width={515} height={140} />
      <Wapper>
        <img src={Img7} style={{ width: '100%' }} alt="" />
        <div className="text">
          <div className="left">
            <p>Vision</p>
            <p>GOALS</p>
            <p>MISSION</p>
            <p>SPIRT</p>
            <p>VALUES</p>
          </div>
          <img src={Img8} style={{ width: vw(30), height: vw(1055) }} alt="" />
          <div className="right">
            <div>
              <h3>企业愿景</h3>
              <p>汇聚科技的力量，让澄易的小伙伴和客户都能实现梦想。</p>
            </div>
            <div>
              <h3>企业目标</h3>
              <p>让更多企业都能享受到专业、 省心、优惠的优质服务。</p>
            </div>
            <div>
              <h3>企业使命</h3>
              <p>用数字化手段， 帮助企业提升核心竞争力。</p>
            </div>
            <div>
              <h3>企业精神</h3>
              <p>同心、同德、同策、同力。</p>
            </div>
            <div>
              <h3>企业价值观</h3>
              <p>
                结果导向，专业高效，追求卓越； 责任担当，待人如己，共同成长。
              </p>
            </div>
          </div>
        </div>
      </Wapper>
      <div
        style={{
          height: vw(20),
          width: '100%',
          backgroundColor: '#E5E5E5'
        }}
      />

      <YeWuDiv>
        <MyText url={ImgF1} width={575} height={140} />
        <div className="yw-text">
          <div className="text-item">
            <div className="title">
              <img src={Img4} alt="" />
              <h3>系统开发</h3>
            </div>
            <p>网站策划/制作</p>
            <p>小程序开发</p>
            <p>APP开发</p>
            <p>CRM开发</p>

            <img src={Img1} alt="" />
          </div>
          <div className="text-item">
            <div className="title">
              <img src={Img5} alt="" />
              <h3>口碑营销</h3>
            </div>
            <p>媒体发布</p>
            <p>百度·EPR</p>
            <p>今日头条/抖音</p>
            <p>知乎</p>
            <p>小红书</p>
            <p>舆情监测</p>

            <img src={Img2} alt="" />
          </div>
          <div className="text-item">
            <div className="title">
              <img src={Img6} alt="" />
              <h3>推广托管</h3>
            </div>
            <p>高端网站定制</p>
            <p>电商平台搭建</p>
            <p>移动端APP开发</p>

            <img src={Img3} alt="" />
          </div>
        </div>
      </YeWuDiv>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Button
          inline
          shape="round"
          style={{ margin: vw('40 0 115 0'), width: vw(390) }}
          onClick={() => {
            history.push('/promotion');
          }}>
          了解更多
        </Button>
      </div>
    </div>
  );
});

export default Aboout;
