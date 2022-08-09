import { FC } from 'react';
import Top from './top';
import Bottom from './bottom';
import { MainDiv } from './style';
import bgImg from '@/../public/images/7-页底/页底-bg.png';

interface FooterProps {}

const Footer: FC<FooterProps> = (props) => {
  const {} = props;
  console.log('Footer');
  return (
    <MainDiv img={bgImg}>
      <Top />
      <Bottom />
    </MainDiv>
  );
};

export default Footer;
