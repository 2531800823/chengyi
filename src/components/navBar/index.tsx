import { menuStatic } from '@/common';
import { FC, useState, Fragment, useContext, memo } from 'react';
import { WapperNar } from './style';
import Item from './item';
import { NarBarData } from '@/layouts';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = memo(() => {
  const [active, setActive] = useState(menuStatic[0].name);
  const [childShow, setChildShow] = useState(false);
  const state = useContext(NarBarData);

  return (
    <WapperNar show={state.isShowNar}>
      {menuStatic.map((item) => (
        <Fragment key={item.name}>
          <Item
            item={item}
            first={true}
            active={active === item.name}
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

export default NavBar;
