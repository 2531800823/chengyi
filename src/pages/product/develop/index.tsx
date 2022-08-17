import { FC, memo } from 'react';
import { MyText } from '@/components/text';
import { AppDiv, DevelopDiv, Wapper } from './style';
import { vw } from '@/utils';

import Font from '@/assets/images/3-产品服务/1-系统开发/KfFont.png';
import Font2 from '@/assets/images/3-产品服务/1-系统开发/KfFont2.png';
import Font3 from '@/assets/images/3-产品服务/1-系统开发/KfFont3.png';
import Img1 from '@/assets/images/3-产品服务/1-系统开发/app开发-bg.png';
import Img2 from '@/assets/images/3-产品服务/1-系统开发/关于我们-网站策划.png';
import Img3 from '@/assets/images/3-产品服务/1-系统开发/关于我们-网站设计.png';
import Img4 from '@/assets/images/3-产品服务/1-系统开发/关于我们-营销性功能开发.png';

import Icon1 from '@/assets/images/3-CRM开发/1-效果-财务管理.png';
import Icon2 from '@/assets/images/3-CRM开发/2-效果-库存管理.png';
import Icon3 from '@/assets/images/3-CRM开发/3-效果-ERP接口.png';
import Icon4 from '@/assets/images/3-CRM开发/4-效果-项目管理.png';
import Icon5 from '@/assets/images/3-CRM开发/5-效果-采购管理.png';
import Icon6 from '@/assets/images/3-CRM开发/6-效果-企业微信-.png';
import Icon7 from '@/assets/images/3-CRM开发/7-效果-呼叫中心.png';
import Icon8 from '@/assets/images/3-CRM开发/8-售后管理-.png';
import Icon9 from '@/assets/images/3-CRM开发/9-效果-OA审批.png';
import Icon10 from '@/assets/images/3-CRM开发/10-效果-平台管理.png';

interface DevelopProps {}

const Develop: FC<DevelopProps> = memo(() => (
  <div>
    <MyText url={Font} width={750} height={140} />

    <Wapper>
      <div className="top">
        <img src={Img3} alt="" />
        <h3>网站策划 - 无策划不网站</h3>
        <p>
          基于企业或品牌产品营销，做网站内容规划与架构设计，传递产品卖点，建立与用户之间的有效沟通，夯实信任基础，从而形成转化。
        </p>
      </div>
      <div className="top">
        <img src={Img2} alt="" />
        <h3>网站设计-第一眼就让客户驻目</h3>
        <p>
          由感及理，深度刻画品牌化企业形象，让品牌与产品
          形象全面提升，塑造品牌影响力。
        </p>
      </div>
      <div className="top">
        <img src={Img4} alt="" />
        <h3>营销性功能开发-建立与客户的深层粘性</h3>
        <p>
          策划与开发客户留资功能，用户复购营销功能等促销
          与询盘转化，大幅提升客户粘度。
        </p>
      </div>
    </Wapper>

    <MyText url={Font2} width={750} height={140} />
    <AppDiv>
      <img src={Img1} style={{ width: '100%' }} alt="" />
      <div className="text">
        <h3>全行业APP开发解决方案 </h3>
        <span>量身定制</span>
        <span>按需报价</span>
        <span>安心售后</span>
      </div>
    </AppDiv>

    <MyText url={Font3} width={750} height={140} />

    <DevelopDiv>
      <div className="text">
        <h2>CRM系统</h2>
        <h3>一体化解决方案</h3>
        <p>致力于为中小企业提供客户关系管理(CRM)和销售管理解决方案。</p>
      </div>
      <div className="icons">
        <div className="items">
          <div className="item">
            <img src={Icon1} style={{ width: vw(46) }} alt="" />
            <span>财务管理</span>
          </div>
          <div className="item">
            <img src={Icon2} style={{ width: vw(46) }} alt="" />
            <span>库存管理</span>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <img src={Icon3} style={{ width: vw(46) }} alt="" />
            <span>ERP接口</span>
          </div>
          <div className="item">
            <img src={Icon4} style={{ width: vw(46) }} alt="" />
            <span>项目管理 </span>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <img src={Icon5} style={{ width: vw(46) }} alt="" />
            <span>采购管理</span>
          </div>
          <div className="item">
            <img src={Icon6} style={{ width: vw(46) }} alt="" />
            <span>呼叫中心</span>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <img src={Icon7} style={{ width: vw(46) }} alt="" />
            <span>平台管理</span>
          </div>
          <div className="item">
            <img src={Icon8} style={{ width: vw(46) }} alt="" />
            <span>企业微信</span>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <img src={Icon9} style={{ width: vw(46) }} alt="" />
            <span>OA审批</span>
          </div>
          <div className="item">
            <img src={Icon10} style={{ width: vw(46) }} alt="" />
            <span>售后管理</span>
          </div>
        </div>
      </div>
    </DevelopDiv>
  </div>
));

export default Develop;
