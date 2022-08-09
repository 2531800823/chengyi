import styled from '@emotion/styled';
import { vw } from '@/utils';

export const WapperDiv = styled.div`
  padding: ${vw('0 20')};
  height: ${vw(174)};
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding-top: ${vw(44)};

  img {
    width: ${vw(80)};
    height: ${vw(80)};
  }
  .logo {
    width: ${vw(310)};
    height: ${vw(100)};
  }
`;
