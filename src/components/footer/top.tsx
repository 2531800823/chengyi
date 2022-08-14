/** @jsx jsx */
import { jsx } from '@emotion/react';
import { FC } from 'react';
import erWeiMa from '@/assets/images/7-页底/页底-二维码.png';
import { FooterText, MyInput } from './style';
import { Button } from '@arco-design/mobile-react';
import { vw } from '@/utils';
interface topProps {}

const Top: FC<topProps> = (props) => (
  <div className="top">
    <div className="lianxi">
      <div className="left">
        <img src={erWeiMa} alt="二维码" />
        <p>扫码咨询</p>
      </div>
      <div className="right">
        <h3>联系方式</h3>
        <p>上海澄易网络科技有限公司</p>
        <p>电话: 13321922391</p>
        <p>邮箱: hz_tang@yeah.net</p>
      </div>
    </div>

    <div className="form">
      <h3>在线预约尊享贵宾体验</h3>
      <div className="inputs">
        <MyInput type="text" placeholder="姓名" />
        <MyInput type="text" placeholder="联系电话" />
      </div>
      <div
        css={{
          marginTop: vw(30),
          display: 'flex',
          justifyContent: 'center'
        }}>
        <Button
          inline
          shape="round"
          style={{
            width: vw(392),
            fontSize: vw(36),
            fontWeight: 500,
            color: '#fff'
          }}>
          提 交
        </Button>
      </div>
    </div>

    <FooterText>
      Copyright 2015-2022 all rights reserved 上海澄易网络科技有限公司版权所有
      沪 ICP 备 12345678 号 -6
    </FooterText>
  </div>
);

export default Top;
