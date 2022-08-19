import { vw } from '@/utils';
import styled from '@emotion/styled';

export const Warpper = styled.div<{ url: string }>`
  padding: ${vw('75 65 0')};
  width: 100%;
  height: ${vw(345)};
  background: url(${(props) => props.url}) no-repeat;
  background-size: contain;
  display: flex;
  justify-content: space-between;

  .item {
    img {
      width: ${vw(150)};
    }
    p {
      color: #fff;
      font-size: ${vw(24)};
      margin-top: ${vw(10)};
    }
  }
`;

export const SemDiv = styled.div`
  margin-top: ${vw(55)};
  padding-bottom: ${vw(40)};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .item {
    box-shadow: 0.8px 0.4px 2.2px rgba(0, 0, 0, -0.1),
      2px 0.9px 5.3px rgba(0, 0, 0, -0.019),
      3.8px 1.8px 10px rgba(0, 0, 0, -0.019),
      6.7px 3.1px 17.9px rgba(0, 0, 0, -0.014),
      12.5px 5.8px 33.4px rgba(0, 0, 0, 0.1), 30px 14px 80px rgba(0, 0, 0, 0.1);
    margin-bottom: ${vw(60)};
    width: calc(100% / 2 - ${vw(64 / 2)});
    border-radius: ${vw(16)};
    position: relative;
    padding-bottom: ${vw(70)};
    img {
      width: 100%;
    }
    .top {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      h3 {
        margin-top: ${vw(45)};
        font-size: ${vw(36)};
        font-weight: 600;
        width: 100%;
        text-align: center;
        color: #333333;
      }
      .line {
        height: ${vw(2)};
        width: ${vw(160)};
        background-color: #e4e4e4;
        margin: ${vw('10 0')};
      }
      p {
        width: 100%;
        text-align: center;
        font-size: ${vw(30)};
        color: #000;
        font-weight: 500;
      }
    }

    .bottom {
      margin-top: ${vw(40)};
      margin-left: ${vw(50)};
      p {
        font-size: ${vw(30)};
        margin-bottom: ${vw(10)};
        span {
          display: inline-block;
          color: #2e6cf2;
          text-align: center;
          width: ${vw(40)};
        }
      }
    }
  }
`;

export const SeoDiv = styled.div`
  width: 100%;
  padding-bottom: ${vw(95)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SeoItme = styled.div<{ url: string }>`
  width: calc(100% / 2 - ${vw(30 / 2)});
  height: ${vw(230)};
  background: url(${(props) => props.url}) no-repeat;
  background-size: cover;
  margin-bottom: ${vw(28)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${vw('0 65 0 28')};

  img {
    width: ${vw(135)};
  }
  .text {
    color: #fff;
    margin-left: ${vw(20)};

    h3 {
      font-size: ${vw(36)};
      font-weight: 500;
    }
    p {
      color: #a0a3ab;
      margin-top: ${vw(10)};
      font-size: ${vw(24)};
    }
  }
`;
