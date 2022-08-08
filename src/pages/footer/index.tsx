import React, {FC} from 'react';
import style from './index.less';
import styles from 'classnames/bind';
import Top from './top';
import Bottom from './bottom';

const cx = styles.bind(style);
interface FooterProps {}

const Footer: FC<FooterProps> = props => {
  const {} = props;
  console.log('Footer');
  return (
    <div className={cx('main')}>
      <Top />
      <Bottom />
    </div>
  );
};

export default Footer;
