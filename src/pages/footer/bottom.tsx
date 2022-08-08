import React, {FC} from 'react';
import style from './index.less';
import styles from 'classnames/bind';
const cx = styles.bind(style);
interface BottomProps {}

const Bottom: FC<BottomProps> = props => {
  const {} = props;
  console.log('Bottom');
  return (
    <div className={cx('bottom')}>
      {' '}
      {Array(4)
        .fill(0)
        .map((item, index) => {
          return <span key={index}>1</span>;
        })}
    </div>
  );
};

export default Bottom;
