import { Carousel } from '@arco-design/mobile-react';
import { useState, MouseEvent, useRef, memo } from 'react';
import { DivBGI, HomeNav, HomeZou } from './style';
import { vw } from '@/utils';

import TOBottom from '@/assets/images/2-banner/向下滑动.png';
import Right from '@/assets/images/2-banner/右箭头.png';
import Left from '@/assets/images/2-banner/左箭头.png';

import { DataZou } from '@/common/zoumadeng';

const Zoumadeng = () => {
  const [, setCurrentIndex] = useState(0);
  const carouselRef = useRef<any>(null);

  const handleClickHoggle = (e: MouseEvent) => {
    const event = e || window.event;
    const method = (event.target as HTMLImageElement)?.getAttribute('data-set');
    switch (method) {
      case 'left':
        setCurrentIndex((prev) => {
          const index = prev === 4 ? 0 : prev + 1;
          carouselRef?.current?.changeIndex(index);

          return index;
        });
        break;
      case 'right':
        setCurrentIndex((prev) => {
          const index = prev === 0 ? 4 : prev - 1;
          carouselRef?.current?.changeIndex(index);

          return index;
        });
        break;
    }
  };

  return (
    <HomeZou>
      <Carousel
        ref={carouselRef as any}
        style={{ position: 'relative' }}
        autoPlay={false}
        onChange={(index) => {
          setCurrentIndex(index);
          console.log(index);
        }}
        renderIndicator={(current, total) => (
          <img
            src={TOBottom}
            style={{
              position: 'relative',
              zIndex: 10,
              width: vw(75),
              height: vw(110)
            }}
          />
        )}>
        {DataZou?.map((item) => (
          <DivBGI key={item.id} url={item.url}>
            {item?.children?.map((ites) => (
              <img key={ites.id} src={ites.url} alt="" style={ites.style} />
            ))}
          </DivBGI>
        ))}
      </Carousel>

      <HomeNav onClick={handleClickHoggle}>
        <img src={Right} data-set="right" alt="" />
        <img src={Left} data-set="left" alt="" />
      </HomeNav>
    </HomeZou>
  );
};
export default memo(Zoumadeng);
