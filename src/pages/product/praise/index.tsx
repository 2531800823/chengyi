import { FC, memo } from 'react';
import { DianNDiv, MeiTiDiv, RightDiv, Warpper } from './style';
import { MyText } from '@/components/text';
import { vw } from '@/utils';

import Font1 from '@/assets/images/3-产品服务/2-口碑营销/KbFont1.png';
import Font2 from '@/assets/images/3-产品服务/2-口碑营销/KbFont2.png';
import Font3 from '@/assets/images/3-产品服务/2-口碑营销/KbFont3.png';
import Icon1 from '@/assets/images/3-产品服务/2-口碑营销/1-媒体发布/1-1.png';
import Icon2 from '@/assets/images/3-产品服务/2-口碑营销/1-媒体发布/1-2.png';
import Icon3 from '@/assets/images/3-产品服务/2-口碑营销/1-媒体发布/1-3.png';
import Img1 from '@/assets/images/3-产品服务/2-口碑营销/img.png';
import Zou from './Zou';
import { Button } from '@arco-design/mobile-react';

interface PraiseProps {}

const Praise: FC<PraiseProps> = memo(() => (
  <Warpper>
    <MyText url={Font1} width={790} height={140} />

    <MeiTiDiv>
      <h5>
        基于媒体资源、维护困难等用户诉求点，推出一站式
        媒体资源整合及发布平台，用户可自主定向更新发布。
      </h5>

      <div className="items">
        <div className="item">
          <img src={Icon1} alt="" />
          <p>10000+</p>
          <p>媒体资源</p>
          <p>海量KOL直签</p>
        </div>
        <div className="item">
          <img src={Icon2} alt="" />
          <p>24小时</p>
          <p>一键自助发布</p>
          <p>简便易操作+</p>
        </div>
        <div className="item">
          <img src={Icon3} alt="" />
          <p>权威</p>
          <p>门户网站合作</p>
          <p>高质输出+</p>
        </div>
      </div>
    </MeiTiDiv>

    <MyText url={Font2} width={790} height={140} />

    <Zou />

    <MyText url={Font3} width={490} height={140} />
    <div style={{ position: 'relative', paddingBottom: vw(140) }}>
      <DianNDiv>
        <div className="left">
          <div className="top">
            <h3>舆情监测系统</h3>
            <p>24小时监测主流平台舆情信息</p>
            <div className="line"></div>
          </div>
          <div className="bottom">
            <div>
              <b>传统软件：</b>
              <span>
                系统价格昂贵；监测准确性差；无法及时预警；监控渠道少，无法监控更多渠道。
              </span>
            </div>
            <div>
              <b>澄易软件：</b>
              <span>NPL算法，覆盖20万+站点；365 * 24小时无死角监控；</span>
            </div>
          </div>
          <Button
            style={{ width: vw(215), height: vw(50), marginTop: vw(55) }}
            type="ghost">
            立即咨询
          </Button>
        </div>
        <RightDiv url={Img1}></RightDiv>
      </DianNDiv>
    </div>
  </Warpper>
));

export default Praise;
