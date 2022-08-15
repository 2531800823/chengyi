import { MyText } from '@/components/text';
import { FC, useRef, MouseEvent, memo } from 'react';

import Font from '@/assets/images/4-产品服务/font.png';
import { vw } from '@/utils';
import { Carousel } from '@arco-design/mobile-react';
import { HomeNav } from '@/components/Zoumadeng/style';
import { BoxShoadow, ImgDiv, TextDiv, ZouDiv, ZouServer } from './style';
import { useRequest } from 'ahooks';

import Left from '@/assets/images/4-产品服务/右箭头.png';
import Right from '@/assets/images/4-产品服务/左箭头.png';
import { HomeZouStatic } from '@/common';

interface ProServeProps {}

const ProServe: FC<ProServeProps> = memo(() => {
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
      <MyText url={Font} width={435} height={140} />

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
          {HomeZouStatic.map((item, index) => (
            <ZouDiv key={item.id}>
              <BoxShoadow>
                <ImgDiv>
                  <img src={item.url} style={{ width: vw(345) }} alt="" />
                  <img
                    src={item.url2}
                    style={{
                      width: vw(item.url2Style),
                      height: vw(830),
                      position: 'absolute',
                      left: vw(66),
                      top: vw(88)
                    }}
                    alt=""
                  />
                </ImgDiv>
                <TextDiv>
                  {item.text.map((ites, index) => (
                    <div key={ites.id}>
                      <img
                        src={ites.url}
                        alt=""
                        style={{ width: vw(60), height: vw(58) }}
                      />
                      <div
                        style={{
                          borderBottom:
                            index !== 2 ? `${vw(2)} solid #E4E4E4` : 'none'
                        }}>
                        <h3>{ites.text}</h3>
                        <p>{ites.detail}</p>
                      </div>
                    </div>
                  ))}
                </TextDiv>
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

export default ProServe;
