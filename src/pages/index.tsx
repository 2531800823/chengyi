import {Button} from 'antd-mobile';
import Header from './header';
import Footer from './footer';

import style from './index.less';
import styles from 'classnames/bind';
const cx = styles.bind(style);

export default function IndexPage() {
  return (
    <div className={cx('main')}>
      <Header />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
