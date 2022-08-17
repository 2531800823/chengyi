import { vw } from '@/utils';
import styled from '@emotion/styled';

export const Wapper = styled.div`
  padding: ${vw('0 50')};
  .top {
    margin-top: ${vw(20)};
    background-color: #f1f1f1;
    border-radius: ${vw(16)};
    width: 100%;
    padding-bottom: ${vw(58)};
    img {
      width: 100%;
    }

    h3 {
      margin: ${vw('40 40 15')};
      font-size: ${vw(42)};
      color: #2e6cf2;
    }
    p {
      margin: ${vw('0 40')};
      font-size: ${vw(30)};
      letter-spacing: ${vw(1)};
      color: #323232;
    }
  }
`;

export const AppDiv = styled.div`
  padding: ${vw('0 50')};
  position: relative;
  .text {
    position: absolute;
    top: ${vw(100)};
    left: ${vw(180)};
    text-align: center;
    h3 {
      font-size: ${vw(60)};
      color: #fff;
      margin-bottom: ${vw(25)};
    }
    span {
      font-size: ${vw(32)};
      color: #fff;
      border: ${vw(2)} solid #fff;
      border-radius: ${vw(10)};
      margin-right: ${vw(25)};
      padding: ${vw('8 18')};
    }
  }
`;
