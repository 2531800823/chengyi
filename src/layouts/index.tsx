import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import 'amfe-flexible';
import { Header, Footer, ScrollTop } from '@/components';
import Arco from '@arco-design/mobile-react';
import '@arco-design/mobile-react/esm/style';
import { useScroll } from 'ahooks';

interface indexProps {
  children: ReactNode;
}
const index: FC<indexProps> = (props) => {
  const { children } = props;
  const [isScroll, setIsScroll] = useState(false);
  const position = useScroll(document);

  useEffect(() => {
    setIsScroll(Number(position?.top) > 120);
  }, [position?.top]);

  return (
    <div>
      <Header />
      {isScroll && <ScrollTop />}
      {children}
      <Footer />
    </div>
  );
};

export default index;
