import { MyText } from '@/components/text';
import ct, { FC, memo } from 'react';

import Img1 from '@/assets/images/2-体验咨询/1.png';
import Img2 from '@/assets/images/2-体验咨询/2.png';
import Img3 from '@/assets/images/2-体验咨询/3.png';
import Img4 from '@/assets/images/2-体验咨询/4.png';
import Img5 from '@/assets/images/2-体验咨询/step-1-.png';
import Img6 from '@/assets/images/2-体验咨询/step-2.png';
import Img7 from '@/assets/images/2-体验咨询/step-3.png';
import Img8 from '@/assets/images/2-体验咨询/step-4.png';
import Font from '@/assets/images/2-体验咨询/ZxFont.png';
import Font2 from '@/assets/images/2-体验咨询/ZxFont2.png';
import { DivImg, TitleDiv, WarpperDiv } from './style';
import { vw } from '@/utils';

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = memo(() => (
  <div>
    <MyText url={Font} width={595} height={140} />

    <TitleDiv>
      <div className="text">
        <div className="item">S</div>
        <h3>聪明</h3>
        <p>学习能力</p>
        <p>创新能力</p>
      </div>
      <div className="text">
        <div className="item">A</div>
        <h3>自驱</h3>
        <p>追求卓越</p>
        <p>意志坚定</p>
      </div>
      <div className="text">
        <div className="item">S</div>
        <h3>自驱</h3>
        <p>追求卓越</p>
        <p>意志坚定</p>
      </div>
      <div className="text">
        <div className="item">A</div>
        <h3>思维</h3>
        <p>自我认知</p>
        <p>产品思维</p>
      </div>
    </TitleDiv>
    <div
      style={{
        height: vw(20),
        width: '100%',
        backgroundColor: '#E5E5E5'
      }}
    />
    <MyText url={Font2} width={825} height={140} />
    <WarpperDiv>
      <div className="text">
        <img src={Img1} style={{ width: vw(608) }} alt="" />
        <DivImg url={Img5}>
          <h3>01 - 专业咨询</h3>
          <p>以用户体验为中心，总结分析用户触点，寻找产品创新。</p>
        </DivImg>
      </div>
      <div className="text">
        <img src={Img2} style={{ width: vw(608) }} alt="" />
        <DivImg url={Img6}>
          <h3>02 - 明确目标</h3>
          <p>明确企业真实迫切的 需求和发现企业潜在的问题 和发展困境。</p>
        </DivImg>
      </div>
      <div className="text">
        <img src={Img3} style={{ width: vw(608) }} alt="" />
        <DivImg url={Img7}>
          <h3>03 - 产品策略</h3>
          <p>为企业制定合理可行的 产品路线图，打造适合企业的产品及服务。</p>
        </DivImg>
      </div>
      <div className="text">
        <img src={Img4} style={{ width: vw(608) }} alt="" />
        <DivImg url={Img8}>
          <h3>04 - 设计体验</h3>
          <p>明确产品设计架构， 设计体验展示。</p>
        </DivImg>
      </div>
    </WarpperDiv>
  </div>
));

export default Experience;
