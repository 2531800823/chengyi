import { FC, memo } from 'react';
import { AboutImg, AboutText } from './style';
import { history } from 'umi';

import Font from '@/assets/images/3-关于我们/font.png';
import About from '@/assets/images/3-关于我们/关于我们-pic.png';
import { Button } from '@arco-design/mobile-react';
import { vw } from '@/utils';
import { MyText } from '../text';
interface MyABoutProps {}

export const MyABout: FC<MyABoutProps> = memo(() => (
  <div>
    <MyText url={Font} />

    <AboutImg>
      <img src={About} alt="" />
    </AboutImg>
    <AboutText>
      上海澄易网络科技有限公司，总部位于上海，专注于助力传统企业数字化转型升级。竭尽全力满足客户需要，用数字化手段，摆脱发展困境，提升企业核心竞争力；资深团队贴心服务，站在用户角度思考，发现痛点，精准定位，制定策略，快速执行；个性化开发服务，以用户为中心，挖掘用户需求，化繁为简，形成可执行方案。
    </AboutText>
    <AboutImg>
      <Button
        inline
        shape="round"
        style={{ margin: vw('40 0 115 0'), width: vw(390) }}
        onClick={() => {
          history.push('/about');
        }}>
        了解更多
      </Button>
    </AboutImg>
    <div
      style={{
        width: '100%',
        height: vw(20),
        backgroundColor: '#E5E5E5'
      }}></div>
  </div>
));
