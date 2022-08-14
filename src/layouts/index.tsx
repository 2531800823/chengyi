import { FC, ReactNode, useEffect, memo, useState, createContext } from 'react';
import 'amfe-flexible';
import { useScroll } from 'ahooks';
import Arco from '@arco-design/mobile-react';
import '@arco-design/mobile-react/esm/style';

import { Header, Footer, ScrollTop, NavBar, Zoumadeng } from '@/components';

export const NarBarData = createContext({
  isShowNar: false,
  setIsShowNar: (falg: boolean) => {}
});
interface indexProps {
  children: ReactNode;
}

const index: FC<indexProps> = memo((props) => {
  const { children } = props;
  const [isScroll, setIsScroll] = useState(false);
  const position = useScroll(document);
  const [isShowNar, setIsShowNar] = useState(false);

  useEffect(() => {
    setIsScroll(Number(position?.top) > 120);
  }, [position?.top]);

  return (
    <NarBarData.Provider value={{ isShowNar, setIsShowNar }}>
      <div>
        <Header />
        <NavBar />
        {isScroll && <ScrollTop />}
        <Zoumadeng />
        {children}
        <Footer />
      </div>
    </NarBarData.Provider>
  );
});

export default index;
