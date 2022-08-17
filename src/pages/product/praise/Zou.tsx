import { HomeNav } from '@/components/Zoumadeng/style';
import {
  BoxShoadow,
  ImgDiv,
  TextDiv,
  ZouDiv,
  ZouServer
} from '@/pages/index/serverZou/style';
import { vw } from '@/utils';
import { Carousel } from '@arco-design/mobile-react';
import { useRequest } from 'ahooks';
import { FC, useRef, MouseEvent, memo } from 'react';

import Left from '@/assets/images/3-产品服务/2-口碑营销/epr流量矩阵/右箭头.png';
import Right from '@/assets/images/3-产品服务/2-口碑营销/epr流量矩阵/左箭头.png';
import { KbZouStatic } from '@/common';
import { ZouShow } from './style';

interface ZouProps {}

const Zou: FC<ZouProps> = memo(() => {
  const current = useRef(0);

  const carouselRef = useRef<any>(null);

  const { run: handleClickHoggle } = useRequest(async (e: MouseEvent) => {
    const event = e || window.event;
    const method =
      (event.target as HTMLImageElement)?.getAttribute &&
      (event.target as HTMLImageElement)?.getAttribute('data-set');
    let index = 0;

    switch (method) {
      case 'left':
        index = current.current === -1 ? 3 : current.current - 1;
        carouselRef?.current?.changeIndex(index);
        current.current = index;
        break;
      case 'right':
        index = current.current === 3 ? 0 : current.current + 1;
        carouselRef?.current?.changeIndex(index);
        current.current = index;

        break;
    }
  });
  return (
    <div style={{ position: 'relative' }}>
      <ZouServer>
        <Carousel
          ref={carouselRef as any}
          style={{ position: 'relative' }}
          showIndicator={false}
          autoPlay={false}
          onChange={(index) => {
            current.current = index;
            console.log(index);
          }}>
          {KbZouStatic.map((item, index) => (
            <ZouDiv num="0" key={item.id}>
              <BoxShoadow>
                <ImgDiv>
                  <img
                    src={item.url[0]}
                    style={{ width: vw(345), height: vw(1072) }}
                    alt=""
                  />
                  <img
                    src={item.url2}
                    style={{
                      width: vw(item.url2Style),
                      height: vw(120),
                      position: 'absolute',
                      left: vw(66),
                      bottom: vw(140)
                    }}
                    alt=""
                  />
                </ImgDiv>
                <ZouShow>
                  <img
                    src={item.url[1]}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: vw(100)
                    }}
                    alt=""
                  />
                  <img src={item.url[2]} alt="" />
                  <div className="text">
                    {item.text.map((ites, index) => (
                      <>
                        {index !== 0 && <div />}
                        <h3>{ites}</h3>
                      </>
                    ))}
                  </div>
                </ZouShow>
              </BoxShoadow>
            </ZouDiv>
          ))}
        </Carousel>
        <HomeNav onClick={handleClickHoggle}>
          <img src={Right} data-set="left" alt="" />
          <img src={Left} data-set="right" alt="" />
        </HomeNav>
      </ZouServer>
    </div>
  );
});

export default Zou;
