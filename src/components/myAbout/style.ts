import { vw } from '@/utils';
import styled from '@emotion/styled';

export const MyABoutDiv = styled.div`
  width: 100%;
  height: ${vw(275)};
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: ${vw(515)};
    height: ${vw(140)};
  }
`;

export const AboutImg = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: ${vw(990)};
    height: ${vw(540)};
  }
`;

export const AboutText = styled.div`
  width: 100%;
  margin-top: ${vw(80)};
  padding: ${vw('0 100')};
  font-size: ${vw(30)};
  color: #8c8c8c;
  font-weight: 500;
  letter-spacing: ${vw(1)};
  line-height: ${vw(60)};
`;

export const AboutBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
