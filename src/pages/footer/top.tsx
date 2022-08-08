import React, {FC} from 'react';
import style from './index.less';
import styles from 'classnames/bind';
const cx = styles.bind(style);

import erWeiMa from '@/../public/images/7-页底/页底-二维码.png';

interface topProps {}

const Top: FC<topProps> = props => {
  const {} = props;
  console.log('top');
  return (
    <div className={cx('top')}>
      <div className={cx('lianxi')}>
        <div className={cx('left')}>
          <img src={erWeiMa} alt="二维码" />
          <p>扫码咨询</p>
        </div>
        <div className={cx('right')}>
          <h3>联系方式</h3>
          <p>上海澄易网络科技有限公司</p>
          <p>电话: 13321922391</p>
          <p>邮箱: hz_tang@yeah.net</p>
        </div>
      </div>
      <div className={cx('form')}>
        <h3>在线预约尊享贵宾体验</h3>
        <div className={cx('inputs')}>
          <input type="text" placeholder="姓名" />
          <input type="text" placeholder="联系电话" />
        </div>
      </div>
    </div>
  );
};

export default Top;
