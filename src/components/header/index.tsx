import { FC, memo, useContext } from 'react';

import { WapperDiv } from './style';

import Line from '@/assets/images/移动端-导航栏下拉框/直线-1-拷贝.png';
import Logo from '@/assets/images/1-页头/head-logo.png';
import Nav from '@/assets/images/1-页头/head-导航.png';
import Call from '@/assets/images/1-页头/head-电话.png';
import { NarBarData } from '@/layouts';

interface HeaderProps {}

export const Header: FC<HeaderProps> = memo(() => {
  const state = useContext(NarBarData);

  const handleClick = () => {
    state?.setIsShowNar(!state?.isShowNar);
  };

  return (
    <WapperDiv>
      <img
        onClick={handleClick}
        src={state?.isShowNar ? Line : Nav}
        alt="导航"
      />
      <img src={Logo} className="logo" alt="logo" />
      <img src={Call} alt="电话" />
    </WapperDiv>
  );
});
