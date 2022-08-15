import { vw } from '@/utils';
import styled from '@emotion/styled';

export const HomeZou = styled.div`
  width: 100%;
  height: ${vw(660)};
  position: relative;
  img {
    width: 100%;
    height: ${vw(660)};
  }
`;

export const HomeNav = styled.div`
  img {
    width: ${vw(50)};
    height: ${vw(50)};
    position: absolute;
    z-index: 3;
    top: 50%;
    transform: translateY(-50%);
    &:nth-of-type(1) {
      left: ${vw(35)};
    }
    &:nth-of-type(2) {
      right: ${vw(35)};
    }
  }
`;
export const DivBGI = styled.div<{ url: string }>`
  width: 100%;
  height: ${vw(660)};
  background: url(${(props) => props.url}) no-repeat;
  background-size: cover;
  position: relative;
  img {
    position: absolute;
  }
`;
