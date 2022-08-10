import { FC, memo } from 'react';
import Top from './top';
import Bottom from './bottom';
import { MainDiv } from './style';
import bgImg from '@/../public/images/7-页底/页底-bg.png';

interface FooterProps {}

const Footer: FC<FooterProps> = (props) => (
  <div>
    <MainDiv img={bgImg}>
      <Top />
    </MainDiv>
    <Bottom />
  </div>
);

export default memo(Footer);
