import React, {FC} from 'react';
import style from './index.less';
import styles from 'classnames/bind';
const cx = styles.bind(style);

import Logo from '@/../public/images/1-页头/head-logo.png';
import Nav from '@/../public/images/1-页头/head-导航.png';
import Call from '@/../public/images/1-页头/head-电话.png';

interface HeaderProps {}

const Header: FC<HeaderProps> = props => {
  return (
    <div className={cx('main')}>
      <img src={Nav} alt="导航" />
      <img src={Logo} className={cx('logo')} alt="logo" />
      <img src={Call} alt="电话" />
    </div>
  );
};

export default Header;
