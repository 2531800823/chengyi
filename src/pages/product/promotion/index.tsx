import { MyText } from '@/components/text';
import { FC, memo } from 'react';
import { SemDiv, SeoDiv, SeoItme, Warpper } from './style';
import { vw } from '@/utils';

import Font1 from '@/assets/images/3-产品服务/3-推广托管/TgFont1.png';
import Font2 from '@/assets/images/3-产品服务/3-推广托管/TgFont2.png';
import Bg from '@/assets/images/3-产品服务/3-推广托管/sem/sem-1-bg.png';
import Img1 from '@/assets/images/3-产品服务/3-推广托管/sem/01-SEM账户分析诊断.png';
import Img2 from '@/assets/images/3-产品服务/3-推广托管/sem/02-SEM投放策略制定.png';
import Img3 from '@/assets/images/3-产品服务/3-推广托管/sem/03-投放效果追踪与优化.png';
import Img4 from '@/assets/images/3-产品服务/3-推广托管/sem/04-着陆页转化分析与提升.png';
import Img5 from '@/assets/images/3-产品服务/3-推广托管/sem/01.png';
import Img6 from '@/assets/images/3-产品服务/3-推广托管/sem/02.png';
import Img7 from '@/assets/images/3-产品服务/3-推广托管/sem/03.png';
import Img8 from '@/assets/images/3-产品服务/3-推广托管/sem/04.png';
import Img9 from '@/assets/images/3-产品服务/3-推广托管/sem/sem-1-增强行业曝光.png';
import Img10 from '@/assets/images/3-产品服务/3-推广托管/sem/sem-1-拓展获客渠道.png';
import Img11 from '@/assets/images/3-产品服务/3-推广托管/sem/sem-1-获取有效咨询.png';
import Img12 from '@/assets/images/3-产品服务/3-推广托管/sem/sem-1-降低营销成本.png';

import SeoImg1 from '@/assets/images/3-产品服务/3-推广托管/seo/1-bg.png';
import SeoImg2 from '@/assets/images/3-产品服务/3-推广托管/seo/2-bg.png';
import SeoImg3 from '@/assets/images/3-产品服务/3-推广托管/seo/3-bg.png';
import SeoImg4 from '@/assets/images/3-产品服务/3-推广托管/seo/4-bg.png';
import SeoImg5 from '@/assets/images/3-产品服务/3-推广托管/seo/1-一个月见效.png';
import SeoImg6 from '@/assets/images/3-产品服务/3-推广托管/seo/2-全过程监控.png';
import SeoImg7 from '@/assets/images/3-产品服务/3-推广托管/seo/3-核心词排名.png';
import SeoImg8 from '@/assets/images/3-产品服务/3-推广托管/seo/4-用效果说话.png';

interface PromotionProps {}

const Promotion: FC<PromotionProps> = memo(() => (
  <div>
    <MyText url={Font1} width={730} height={140} />

    <div style={{ padding: vw('0 50') }}>
      <Warpper url={Bg}>
        <div className="item">
          <img src={Img9} alt="" />
          <p>增强行业曝光</p>
        </div>
        <div className="item">
          <img src={Img10} alt="" />
          <p>获取有效咨询</p>
        </div>
        <div className="item">
          <img src={Img11} alt="" />
          <p>拓展获客渠道</p>
        </div>
        <div className="item">
          <img src={Img12} alt="" />
          <p>降低营销成本</p>
        </div>
      </Warpper>

      <SemDiv>
        <div className="item">
          <div className="top">
            <img src={Img1} alt="" />
            <h3>SEM账户分析诊断</h3>
            <div className="line" />
            <p>找出账户可提升空间</p>
          </div>
          <div className="bottom">
            <p>
              <span>•</span>
              关建词消费分析
            </p>
            <p>
              <span>•</span>
              投放时段分析
            </p>
            <p>
              <span>•</span>
              投放地域分析
            </p>
            <p>
              <span>•</span>
              创意分析
            </p>
            <p>
              <span>•</span>
              落地页分析
            </p>
            <p>
              <span>•</span>
              渠道分析
            </p>
          </div>
          <img
            src={Img5}
            style={{
              position: 'absolute',
              width: vw(162),
              bottom: 0,
              right: 0
            }}
            alt=""
          />
        </div>
        <div className="item">
          <div className="top">
            <img src={Img2} alt="" />
            <h3>SEM投放策略制定</h3>
            <div className="line" />
            <p>制定优势竞争策略</p>
          </div>
          <div className="bottom">
            <p>
              <span>•</span>
              预算规划策略
            </p>
            <p>
              <span>•</span>
              品牌策略
            </p>
            <p>
              <span>•</span>
              内容策略
            </p>
            <p>
              <span>•</span>
              推广节奏策略
            </p>
            <p>
              <span>•</span>
              媒体投放策略
            </p>
            <p>
              <span>•</span>
              投放细节策略
            </p>
          </div>
          <img
            src={Img6}
            style={{
              position: 'absolute',
              width: vw(162),
              bottom: 0,
              right: 0
            }}
            alt=""
          />
        </div>
        <div className="item">
          <div className="top">
            <img src={Img3} alt="" />
            <h3>投放效果追踪与优化</h3>
            <div className="line"></div>
            <p>持续优化账户转化能力</p>
          </div>
          <div className="bottom">
            <p>
              <span>•</span>
              关键词转化率分析与调整
            </p>
            <p>
              <span>•</span>
              网站转化率分析与调整
            </p>
            <p>
              <span>•</span>
              A&B测试
            </p>
            <p>
              <span>•</span>
              页面价值分析与调整
            </p>
            <p>
              <span>•</span>
              转化地域精细化调整
            </p>
            <p>
              <span>•</span>
              推广时段精细化调整
            </p>
          </div>
          <img
            src={Img7}
            style={{
              position: 'absolute',
              width: vw(162),
              bottom: 0,
              right: 0
            }}
            alt=""
          />
        </div>
        <div className="item">
          <div className="top">
            <img src={Img4} alt="" />
            <h3>着陆页转化分析与提升</h3>
            <div className="line"></div>
            <p>提升着陆页转化率</p>
          </div>
          <div className="bottom">
            <p>
              <span>•</span>
              网站转化率分析
            </p>
            <p>
              <span>•</span>
              网站访问路径分析
            </p>
            <p>
              <span>•</span>
              站内用户关注点分析
            </p>
            <p>
              <span>•</span>
              网站跳出率分析
            </p>
            <p>
              <span>•</span>
              网站访问时长分析
            </p>
            <p>
              <span>•</span>
              页面价值分析
            </p>
            <p>
              <span>•</span>
              新旧访问比例分析
            </p>
          </div>
          <img
            src={Img8}
            style={{
              position: 'absolute',
              width: vw(162),
              bottom: 0,
              right: 0
            }}
            alt=""
          />
        </div>
      </SemDiv>
    </div>

    <MyText url={Font2} width={730} height={140} />

    <div style={{ padding: vw('0 50') }}>
      <SeoDiv>
        <SeoItme url={SeoImg1}>
          <img src={SeoImg5} alt="" />
          <div className="text">
            <h3>一个月见效</h3>
            <p>一个月左右即可看到 流量的变化波动</p>
          </div>
        </SeoItme>
        <SeoItme url={SeoImg2}>
          <img src={SeoImg6} alt="" />
          <div className="text">
            <h3>全过程监控</h3>
            <p>后台全程监控关键词 排名及流量</p>
          </div>
        </SeoItme>
        <SeoItme url={SeoImg3}>
          <img src={SeoImg7} alt="" />
          <div className="text">
            <h3>核心词排名</h3>
            <p>每天至少50个所选 关键词的排名</p>
          </div>
        </SeoItme>
        <SeoItme url={SeoImg4}>
          <img src={SeoImg8} alt="" />
          <div className="text">
            <h3>用效果说话</h3>
            <p>排名、流量双重保障</p>
          </div>
        </SeoItme>
      </SeoDiv>
    </div>
  </div>
));

export default Promotion;
