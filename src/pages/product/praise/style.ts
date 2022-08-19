import styled from '@emotion/styled';
import bg from '@/assets/images/3-产品服务/2-口碑营销/bg.png';
import { vw } from '@/utils';

export const Warpper = styled.div`
  background: url(${bg}) no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export const MeiTiDiv = styled.div`
  margin: ${vw('0 50 120')};
  height: ${vw(630)};
  background-color: #fff;
  border-radius: ${vw(18)};
  padding: ${vw('68 50 0 60')};

  box-shadow: 0.8px 0.4px 2.2px rgba(0, 0, 0, -0.1),
    2px 0.9px 5.3px rgba(0, 0, 0, -0.019),
    3.8px 1.8px 10px rgba(0, 0, 0, -0.019),
    6.7px 3.1px 17.9px rgba(0, 0, 0, -0.014),
    12.5px 5.8px 33.4px rgba(0, 0, 0, 0.1), 30px 14px 80px rgba(0, 0, 0, 0.1);

  h5 {
    font-size: ${vw(36)};
    color: #343434;
    font-weight: 500;
  }
  .items {
    margin-top: ${vw(75)};
    display: flex;
    justify-content: space-between;
    .item {
      text-align: center;
      img {
        width: ${vw(160)};
        margin-bottom: ${vw(20)};
      }
      p {
        font-size: ${vw(30)};
        font-weight: 500;
      }
    }
  }
`;

export const ZouShow = styled.div`
  flex: 1;
  background-color: #fff;
  padding-top: ${vw(100)};
  padding-left: ${vw(50)};
  position: relative;

  .text {
    margin-top: ${vw(70)};
    div {
      background-color: #e4e4e4;
      margin: ${vw('53 42 42 0')};
      height: ${vw(2)};
    }
    h3 {
      font-size: ${vw(42)};
    }
  }

  img {
    width: ${vw(180)};
  }
`;

export const DianNDiv = styled.div`
  margin-left: ${vw(100)};
  margin-bottom: ${vw(50)};

  display: flex;

  .left {
    width: ${vw(475)};
    .top {
      margin-bottom: ${vw(30)};
      h3 {
        font-size: ${vw(40)};
      }
      p {
        margin-top: ${vw(10)};
        font-size: ${vw(24)};
        margin-bottom: ${vw(15)};
      }
      .line {
        width: ${vw(225)};
        height: ${vw(2)};
        background-color: #2e6cf2;
      }
    }
    .bottom {
      font-size: ${vw(30)};

      div {
        &:nth-of-type(1) {
          margin-bottom: ${vw(15)};
        }
      }
    }
    .btn {
      width: ${vw(215)};
      height: ${vw(50)};
    }
  }
`;

export const RightDiv = styled.div<{ url: string }>`
  flex: 1;
  margin-top: ${vw(60)};
  background: url(${(props) => props.url}) no-repeat;
  background-size: cover;
`;
