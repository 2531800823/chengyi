import { FC, memo, useContext } from 'react';
import { WapperNarItem } from './style';
import { vw } from '@/utils';
import { history } from 'umi';

import Rect from '@/assets/images/移动端-导航栏下拉框/移动端导航页_0000_矩形-14-拷贝.png';
import Rect2 from '@/assets/images/移动端-导航栏下拉框/移动端导航页_0001_矩形-14-拷贝-2.png';
import Oval from '@/assets/images/移动端-导航栏下拉框/移动端导航页_0002_椭圆-2-拷贝-4.png';
import Oval2 from '@/assets/images/移动端-导航栏下拉框/移动端导航页_0003_椭圆-2-拷贝.png';
import Rect3 from '@/assets/images/移动端-导航栏下拉框/移动端导航页_0004_矩形-15.png';
import { NarBarData } from '@/layouts';

interface ItemProps {
  item: any;
  first?: boolean;
  active?: boolean;
  setActive?: (key: string) => void;
  setChildShow?: (falg: boolean) => void;
  childShow?: boolean;
}

const Item: FC<ItemProps> = memo((props) => {
  const {
    item,
    first = false,
    active,
    setActive,
    setChildShow,
    childShow
  } = props;
  const state = useContext(NarBarData);

  const handleClick = () => {
    state?.setIsShowNar(false);
    history.push(item.key);
    setActive && setActive(item.name);
  };

  const handleToogle = (e: any) => {
    e.stopPropagation();
    setChildShow && setChildShow(!childShow);
  };

  return (
    <WapperNarItem onClick={handleClick}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={first ? (active ? Oval : Oval2) : Rect3}
          style={{ width: vw(first ? 30 : 17), height: vw(first ? 32 : 24) }}
          alt=""
        />
        <p>{item.name}</p>
      </div>
      {item.children && item.children.length > 0 && (
        <img
          src={childShow ? Rect2 : Rect}
          style={{ width: vw(34), height: vw(childShow ? 8 : 34) }}
          onClick={handleToogle}
          alt=""
        />
      )}
    </WapperNarItem>
  );
});

export default Item;
