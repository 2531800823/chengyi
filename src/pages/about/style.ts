import { vw } from '@/utils';
import styled from '@emotion/styled';

export const Wapper = styled.div`
  width: 100%;
  padding: ${vw('0 50')};
  margin-bottom: ${vw(100)};
  .text {
    margin-top: ${vw(50)};
    display: flex;
    padding: ${vw('0 50')};

    .left {
      width: ${vw(255)};
      margin: ${vw('90 0')};
      font-size: ${vw(30)};

      p {
        margin-top: ${vw(165)};
        &:nth-of-type(1) {
          margin-top: 0;
        }
      }
    }
    .right {
      flex: 1;
      margin-left: ${vw(80)};
      margin-top: ${vw(60)};
      div {
        margin-top: ${vw(72)};
        &:nth-of-type(1) {
          margin-top: 0;
        }
      }
      h3 {
        font-size: ${vw(34)};
        font-weight: 500;
        color: #2e6cf2;
        margin-bottom: ${vw(20)};
      }
      p {
        font-size: ${vw(30)};
        letter-spacing: ${vw(1)};
      }
    }
  }
`;

export const YeWuDiv = styled.div`
  width: 100%;
  .yw-text {
    margin: ${vw('38 0')};
    display: flex;
    padding: ${vw('0 55')};
    justify-content: space-between;
    .text-item {
      position: relative;
      width: ${vw(320)};
      height: ${vw(540)};
      border-radius: ${vw(15)};
      background-color: #f3f7fd;
      padding: ${vw('75 45 0')};
      .title {
        display: flex;
        align-items: center;
        padding-bottom: ${vw(15)};
        border-bottom: ${vw(3)} solid #ccd0d4;
        margin-bottom: ${vw(40)};
        img {
          position: relative;
          width: ${vw(42)};
          height: ${vw(42)};
        }
        h3 {
          font-size: ${vw(30)};
          color: #2e6cf2;
          margin-left: ${vw(20)};
        }
      }

      img {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 50%;
      }
      p {
        letter-spacing: ${vw(1)};
        font-size: ${vw(24)};
        margin-bottom: ${vw(25)};
      }
    }
  }
`;
