import { vw } from '@/utils';
import styled from '@emotion/styled';

export const Wapper = styled.div`
  padding: ${vw('0 50')};
  .top {
    margin-top: ${vw(20)};
    background-color: #f1f1f1;
    border-radius: ${vw(16)};
    width: 100%;
    padding-bottom: ${vw(58)};
    img {
      width: 100%;
    }

    h3 {
      margin: ${vw('40 40 15')};
      font-size: ${vw(42)};
      color: #2e6cf2;
    }
    p {
      margin: ${vw('0 40')};
      font-size: ${vw(30)};
      letter-spacing: ${vw(1)};
      color: #323232;
    }
  }
`;

export const AppDiv = styled.div`
  padding: ${vw('0 50')};
  position: relative;
  .text {
    position: absolute;
    top: ${vw(100)};
    left: ${vw(180)};
    text-align: center;
    h3 {
      font-size: ${vw(60)};
      color: #fff;
      margin-bottom: ${vw(25)};
    }
    span {
      font-size: ${vw(32)};
      color: #fff;
      border: ${vw(2)} solid #fff;
      border-radius: ${vw(10)};
      margin-right: ${vw(25)};
      padding: ${vw('8 18')};
    }
  }
`;

export const DevelopDiv = styled.div`
  margin: ${vw('0 50 100')};
  background-color: #3172f5;
  border-radius: ${vw(20)};
  height: ${vw(535)};

  display: flex;

  .text {
    width: ${vw(370)};
    color: #fff;
    padding-top: ${vw(100)};
    padding-left: ${vw(40)};
    h2 {
      font-size: ${vw(66)};
    }
    h3 {
      font-size: ${vw(46)};
      margin-bottom: ${vw(25)};
    }
    p {
      font-size: ${vw(30)};
      margin-right: ${vw(30)};
    }
  }

  .icons {
    border-radius: ${vw(20)};
    flex: 1;
    margin: ${vw(10)};
    border: ${vw(2)} solid #cbcbcb;
    background-color: #fff;

    .items {
      display: flex;
      flex-wrap: wrap;
      height: 20%;
      border-top: ${vw(2)} solid #cbcbcb;
      &:nth-of-type(1) {
        border-top: none;
      }
      .item {
        width: 50%;
        border-left: ${vw(2)} solid #cbcbcb;
        &:nth-of-type(1) {
          border-left: none;
        }
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          font-size: ${vw(26)};
          margin-left: ${vw(15)};
        }
      }
    }
  }
`;
