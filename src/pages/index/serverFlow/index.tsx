import { FC, memo } from 'react';
import { ContentDiv, Wapper } from './style';
import { MyText } from '@/components/text';

import Font from '@/assets/images/5-服务流程/bgText.png';

import ImgBg from '@/assets/images/5-服务流程/服务流程-bg.png';
import ImgLine from '@/assets/images/5-服务流程/服务流程-线.png';
import { vw } from '@/utils';
import { StaticServerFlow } from '@/common';

interface ServerFlowProps {}

const ServerFlow: FC<ServerFlowProps> = memo(() => (
  <Wapper url={ImgBg}>
    <MyText url={Font} width={628} height={140} />

    <ContentDiv>
      <img
        src={ImgLine}
        style={{ width: vw(855), height: vw(285), position: 'relative' }}
        alt=""
      />
      {StaticServerFlow.map((item) => (
        <div key={item.id} style={item.style}>
          <img src={item.url} alt={item.text} />
          <p>{item.text}</p>
        </div>
      ))}
    </ContentDiv>
  </Wapper>
));

export default ServerFlow;
