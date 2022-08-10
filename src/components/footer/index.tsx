import { FC, memo } from 'react';
import Top from './top';
import Bottom from './bottom';
import { MainDiv } from './style';
import bgImg from '@/../public/images/7-页底/页底-bg.png';

interface FooterProps {}

export const Footer: FC<FooterProps> = memo(() => (
  <div>
    <MainDiv img={bgImg}>
      <Top />
    </MainDiv>
    <Bottom />
  </div>
));
