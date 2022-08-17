import { vw } from '@/utils';
import styled from '@emotion/styled';

export const TitleDiv = styled.div`
  margin-top: ${vw(6)};
  width: 100%;
  padding: ${vw('0 100')};

  height: ${vw(480)};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  .text {
    height: 100%;
    text-align: center;
  }
  .item {
    width: ${vw(140)};
    height: ${vw(135)};
    border-radius: 50%;
    border: ${vw(2)} solid #3c76f3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${vw(40)};
    color: #3c76f3;
    font-weight: 600;
  }
  h3 {
    margin-top: ${vw(55)};
    font-size: ${vw(40)};
    margin-bottom: ${vw(18)};
  }
  p {
    font-size: ${vw(22)};
  }
`;

export const WarpperDiv = styled.div`
  padding: ${vw('0 50 56')};
  width: 100%;
  .text {
    display: flex;
    margin-bottom: ${vw(20)};
  }
`;

export const DivImg = styled.div<{ url: string }>`
  flex: 1;
  background: url(${(props) => props.url});
  background-size: contain;
  padding: ${vw('75 36 0')};
  h3 {
    font-size: ${vw(34)};
    color: #3c76f3;
    margin-bottom: ${vw(33)};
  }
  p {
    font-size: ${vw(22)};
    color: #b1b1b1;
    letter-spacing: ${vw(1)};
  }
`;
