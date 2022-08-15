import { v4 } from 'uuid';
import Img1 from '@/assets/images/5-服务流程/服务流程-1-客户沟通.png';
import Img2 from '@/assets/images/5-服务流程/服务流程-2-需求分析.png';
import Img3 from '@/assets/images/5-服务流程/服务流程-3-服务报价.png';
import Img4 from '@/assets/images/5-服务流程/服务流程-4-签订合同.png';
import Img5 from '@/assets/images/5-服务流程/服务流程-5-实施定制.png';
import { vw } from '@/utils';
export const StaticServerFlow = [
  {
    id: v4(),
    text: '客户沟通',
    url: Img1,
    style: {
      left: vw(160),
      top: vw(-55)
    }
  },
  {
    id: v4(),
    text: '需求分析',
    url: Img2,
    style: {
      left: vw(450),
      top: vw(-55)
    }
  },
  {
    id: v4(),
    text: '服务报价',
    url: Img3,
    style: {
      left: vw(740),
      top: vw(-55)
    }
  },
  {
    id: v4(),
    text: '签订合同',
    url: Img4,
    style: {
      left: vw(595),
      top: vw(215)
    }
  },
  {
    id: v4(),
    text: '实施定制',
    url: Img5,
    style: {
      left: vw(310),
      top: vw(215)
    }
  }
];
