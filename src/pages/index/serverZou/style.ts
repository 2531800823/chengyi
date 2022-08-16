import { vw } from '@/utils';
import styled from '@emotion/styled';

export const ZouServer = styled.div`
  width: 100%;
  position: relative;
  top: ${vw(-30)};
  z-index: 1;
`;

export const ZouDiv = styled.div`
  width: 100%;
  padding: ${vw('50 100 150')};
  height: ${vw(1270)};
`;
export const BoxShoadow = styled.div`
  display: flex;
  border-radius: ${vw(30)};

  box-shadow: 0.8px 0.4px 2.2px rgba(0, 0, 0, -0.014),
    2px 0.9px 5.3px rgba(0, 0, 0, -0.019),
    3.8px 1.8px 10px rgba(0, 0, 0, -0.019),
    6.7px 3.1px 17.9px rgba(0, 0, 0, -0.014),
    12.5px 5.8px 33.4px rgba(0, 0, 0, 0.001), 30px 14px 80px rgba(0, 0, 0, 0.07);
`;

export const ImgDiv = styled.div`
  position: relative;
  height: 100%;
  font-size: ${vw(30)};

  img {
    display: block;
    height: 100%;
  }
`;

export const TextDiv = styled.div`
  flex: 1;
  padding-top: ${vw(100)};
  padding: ${vw('40 65 0')};

  display: flex;
  flex-direction: column;
  border: 1px solid #f3f6fd;

  div {
    display: flex;
    flex: 1;
    img {
      padding: ${vw('60 0')};
      box-sizing: content-box;
    }
    div {
      padding: ${vw('60 0')};
      margin-left: ${vw(20)};
      display: block;
    }
    h3 {
      font-size: ${vw(43)};
    }
    p {
      margin-top: ${vw(35)};
      font-size: ${vw(28)};
      line-height: ${vw(43)};
    }
  }
`;
