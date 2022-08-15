import { vw } from '@/utils';
import styled from '@emotion/styled';

export const Wapper = styled.div`
  padding: ${vw('40 100')};
`;

export const TabDiv = styled.div<{ active: boolean }>`
  text-align: center;
  background-color: ${(props) => (props.active ? '#2e6cf2' : '#f6f6f6')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  width: ${vw(275)};
  height: ${vw(60)};
  font-size: ${vw(36)};
  line-height: ${vw(60)};
`;

export const XinWenItemDiv = styled.div`
  width: 100%;
  height: ${vw(240)};
  border-top: ${vw(1)} solid #4f85f4;
  padding: ${vw('28 0')};
  display: flex;

  &:nth-last-child(1) {
    border-bottom: ${vw(1)} solid #4f85f4;
  }

  div {
    margin-left: ${vw(30)};
  }

  p {
    margin-top: ${vw(15)};
    margin-bottom: ${vw(20)};
    font-size: ${vw(30)};
    font-weight: 500;
    letter-spacing: ${vw(1)};
  }

  .text {
    margin: 0;
    color: #656565;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    font-size: ${vw(24)};
    -webkit-box-orient: vertical;
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
    width: ${vw(280)};
    height: ${vw(180)};
  }
`;
