import { vw } from '@/utils';
import styled from '@emotion/styled';

export const Wapper = styled.div`
  padding: ${vw('40 100')};
`;

export const TabDiv = styled.div<{ active: boolean }>`
  text-align: center;
  margin-right: ${vw(38)};
  margin-left: ${vw(42)};
  color: ${(props) => (props.active ? '#2E6CF2' : '#000')};
  font-weight: ${(props) => (props.active ? 500 : 400)};
  height: ${vw(60)};
  font-size: ${vw(36)};
  line-height: ${vw(60)};
`;

export const TabDivShu = styled.div`
  width: ${vw(3)};
  height: ${vw(36)};
  background-color: #434343;
`;

export const XinWenItemDiv = styled.div`
  width: 100%;
  border-bottom: ${vw(1)} solid #4f85f4;
  padding-top: ${vw(50)};
  padding-bottom: ${vw(30)};

  .ke {
    margin-top: ${vw(45)};
  }

  p {
    margin-top: ${vw(15)};
    margin-bottom: ${vw(25)};
    font-size: ${vw(30)};
    font-weight: 500;
    letter-spacing: ${vw(1)};
  }

  .text {
    margin: 0;
    color: #656565;
    display: -webkit-box;
    overflow: hidden;
    letter-spacing: ${vw(1)};
    -webkit-line-clamp: 2;
    font-size: ${vw(24)};
    margin-bottom: ${vw(30)};
    -webkit-box-orient: vertical;
  }
  .jiantou {
    font-size: 12px;
    color: #a5a5a5;
    position: relative;
    img {
      width: ${vw(31)};
      position: absolute;
      right: ${vw(-43)};
      top: 50%;
      transform: translateY(-50%);
    }
  }

  h3 {
    font-size: ${vw(36)};
    font-weight: 600;
    span {
      font-size: ${vw(24)};
      font-weight: 400;
    }
  }
  img {
    width: 100%;
  }
`;
