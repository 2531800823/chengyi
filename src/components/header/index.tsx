import { FC, memo } from 'react';

import { WapperDiv } from './style';

import Logo from '@/../public/images/1-页头/head-logo.png';
import Nav from '@/../public/images/1-页头/head-导航.png';
import Call from '@/../public/images/1-页头/head-电话.png';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <WapperDiv>
    <img src={Nav} alt="导航" />
    <img src={Logo} className="logo" alt="logo" />
    <img src={Call} alt="电话" />
  </WapperDiv>
);

export default memo(Header);
