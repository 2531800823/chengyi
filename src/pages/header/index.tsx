import React, {FC} from 'react';
import style from './index.less';
import styles from 'classnames/bind';
const cx = styles.bind(style);

interface HeaderProps {}

const Header: FC<HeaderProps> = props => {
  return <div className={cx('main')}></div>;
};

export default Header;
