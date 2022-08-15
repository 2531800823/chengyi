import { vw } from '@/utils';
import styled from '@emotion/styled';

export const Wapper = styled.div<{ url: string }>`
  padding-top: ${vw(80)};
  height: ${vw(1005)};
  width: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  background: url(${(props) => props.url}) no-repeat;
  background-size: cover;
`;

export const ContentDiv = styled.div`
  margin-top: ${vw(130)};
  flex: 1;
  padding: ${vw('0 100')};
  position: relative;
  div {
    position: absolute;
  }
  img {
    width: ${vw(120)};
  }
  p {
    font-size: ${vw(30)};
    color: #fff;
  }
`;
