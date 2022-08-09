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
    <div>
      <MainDiv img={bgImg}>
        <Top />
      </MainDiv>
      <Bottom />
    </div>
  );
};

export default Footer;
