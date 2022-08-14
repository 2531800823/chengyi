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
