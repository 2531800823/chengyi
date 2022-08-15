import { Carousel } from '@arco-design/mobile-react';
import { useState, MouseEvent, useRef, memo } from 'react';
import { DivBGI, HomeNav, HomeZou } from './style';
import { vw } from '@/utils';

import TOBottom from '@/assets/images/2-banner/向下滑动.png';
import Right from '@/assets/images/2-banner/右箭头.png';
import Left from '@/assets/images/2-banner/左箭头.png';

import { DataZou } from '@/common/zoumadeng';
import { useRequest } from 'ahooks';

export const Zoumadeng = memo(() => {
  const current = useRef(0);
  const carouselRef = useRef<any>(null);

  const { run: handleClickHoggle } = useRequest(
    async (e: MouseEvent) => {
      const event = e || window.event;
      const method =
        event.target &&
        (event.target as HTMLImageElement)?.getAttribute('data-set');
      let index = 0;
      switch (method) {
        case 'left':
          index = current.current === 5 ? 0 : current.current + 1;
          carouselRef?.current?.changeIndex(index);
          current.current = index;

          break;
        case 'right':
          index = current.current === -1 ? 5 : current.current - 1;
          carouselRef?.current?.changeIndex(index);
          current.current = index;
          break;
      }
    },
    {
      throttleWait: 300,
      manual: true
    }
  );

  return (
    <HomeZou>
      <Carousel
        ref={carouselRef as any}
        style={{ position: 'relative' }}
        autoPlay={true}
        onChange={(index) => {
          current.current = index;
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
});
