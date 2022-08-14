import Banner1 from '@/assets/images/2-banner/banner-1.png';
import Banner2 from '@/assets/images/2-banner/banner-2-bg.png';
import Banner2Pic from '@/assets/images/2-banner/banner-2-pic.png';
import Banner3 from '@/assets/images/2-banner/banner-3-1.png';
import Banner32 from '@/assets/images/2-banner/banner-3-2.png';
import Banner3bg from '@/assets/images/2-banner/banner-3-bg.png';
import Banner4 from '@/assets/images/2-banner/banner-4.png';
import Banner5 from '@/assets/images/2-banner/banner-5.png';

import BannerFont from '@/assets/images/2-banner/banner1.png';
import Banner2Font from '@/assets/images/2-banner/banner2font.png';
import Banner3Font from '@/assets/images/2-banner/banner3font.png';
import Banner4Font from '@/assets/images/2-banner/banner4font.png';
import { vw } from '@/utils';

export const DataZou = [
  {
    id: 1,
    url: Banner1,
    children: [
      {
        id: 2,
        url: BannerFont,
        style: {
          width: vw(720),
          height: vw(110),
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)'
        }
      }
    ]
  },
  {
    id: 3,
    url: Banner2,
    children: [
      {
        id: 4,
        url: Banner2Pic,
        style: {
          width: vw(675),
          height: vw(470),
          right: 0,
          top: vw(85)
        }
      },
      {
        id: 5,
        url: Banner2Font,
        style: {
          width: vw(435),
          height: vw(112),
          top: '50%',
          left: vw(78),
          transform: 'translateY(-50%)'
        }
      }
    ]
  },
  {
    id: 6,
    url: Banner3bg,
    children: [
      {
        id: 7,
        url: Banner3,
        style: {
          width: vw(900),
          height: vw(410),
          top: vw(278),
          left: vw(100)
        }
      },
      {
        id: 8,
        url: Banner32,
        style: {
          width: vw(1040),
          height: vw(430),
          top: vw(248),
          left: vw(20)
        }
      },
      {
        id: 8,
        url: Banner3Font,
        style: {
          width: vw(435),
          height: vw(105),
          top: vw(100),
          left: '50%',
          transform: 'translateX(-50%)'
        }
      }
    ]
  },
  {
    id: 9,
    url: Banner4,
    children: [
      {
        id: 10,
        url: Banner4Font,
        style: {
          width: vw(890),
          height: vw(105),
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)'
        }
      }
    ]
  },
  {
    id: 11,
    url: Banner5,
    children: []
  }
];
