import { FC, useState, Fragment, useContext, memo, useEffect } from 'react';
import { WapperNar } from './style';
import Item from './item';
import { NarBarData } from '@/layouts';
import { menuStatic } from '@/common';
import { history } from 'umi';
interface NavBarProps {}

export const NavBar: FC<NavBarProps> = memo(() => {
  const [active, setActive] = useState(menuStatic[0].key);
  const [childShow, setChildShow] = useState(false);
  const state = useContext(NarBarData);
  useEffect(() => {
    setActive(history.location?.pathname);
  }, [history.location.pathname]);

  return (
    <WapperNar show={state.isShowNar}>
      {menuStatic.map((item) => (
        <Fragment key={item.name}>
          <Item
            item={item}
            first={true}
            active={active === item.key}
            setActive={setActive}
            setChildShow={setChildShow}
            childShow={childShow}
          />
          {childShow &&
            item?.children?.map((ites) => <Item item={ites} key={ites.name} />)}
        </Fragment>
      ))}
    </WapperNar>
  );
});
