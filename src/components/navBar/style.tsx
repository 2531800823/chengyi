import { vw } from '@/utils';
import styled from '@emotion/styled';

interface IWapperNar {
  show: boolean;
}

export const WapperNar = styled.div<IWapperNar>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  z-index: 3;
  top: ${vw(174)};
  width: 100%;
  height: calc(100vh - ${vw(174)});
  border-top: ${vw(6)} solid #2c6df6;
  background-color: #fff;
  padding-bottom: ${vw(240)};
`;

export const WapperNarItem = styled.div`
  background-color: #fff;
  height: ${vw(145)};
  width: 100%;
  border-bottom: ${vw(2)} solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${vw(70)};
  padding-right: ${vw(30)};
  p {
    font-size: ${vw(36)};
    margin-left: ${vw(60)};
  }
`;
