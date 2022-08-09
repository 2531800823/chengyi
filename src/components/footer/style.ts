import styled from '@emotion/styled';
import { vw } from '@/utils';
import { ClassAttributes } from 'react';

export const MainDiv = styled.div<{ img: any }>`
  box-sizing: border-box;
  width: 100%;
  padding: ${vw('0 20')};
  background-color: pink;
  background: url(${(props) => props.img});
  background-size: cover;

  .top {
    width: 100%;
    box-sizing: border-box;
    padding: ${vw('0 80')};
    padding-top: ${vw(110)};

    .lianxi {
      padding-bottom: ${vw(45)};
      border-bottom: ${vw(1)} solid #656565;
      display: flex;

      .left {
        width: ${vw(360)};
        border-right: ${vw(1)} solid #656565;
        font-size: 0;
        img {
          margin-left: ${vw(75)};
          width: ${vw(205)};
        }
        p {
          margin-top: ${vw(20)};
          text-align: center;
          color: #fff;
          font-size: ${vw(18)};
        }
      }
      .right {
        flex: 1;
        color: #fff;
        margin-left: ${vw(74)};
        text-align: center;
        h3 {
          font-size: ${vw(36)};
          font-weight: 400;
          position: relative;
          margin-bottom: ${vw(28)};
          &::after {
            content: '';
            position: absolute;
            bottom: ${vw(-10)};
            left: 50%;
            transform: translateX(-50%);
            width: ${vw(75)};
            height: ${vw(3)};
            background-color: #2e6cf2;
          }
        }
        p {
          font-size: ${vw(30)};
          margin-top: ${vw(22)};
        }
      }
    }

    .form {
      width: 100%;
      margin-top: ${vw(58)};
      padding-bottom: ${vw(55)};
      border-bottom: ${vw(1)} solid #656565;
      h3 {
        font-size: ${vw(32)};
        color: #fff;
        text-align: center;
      }
      .inputs {
        margin: ${vw('42 74 0')};
      }
    }
  }
  .bottom {
    height: ${vw(172)};
    display: flex;
  }
`;

export const MyInput = styled.input<ClassAttributes<HTMLInputElement>>`
  width: 100%;
  height: ${vw(80)};
  min-height: 26.8px;
  outline: none;
  border: none;
  border-radius: ${vw(10)};
  font-size: ${vw(28)};
  margin-bottom: ${vw(15)};
  &::placeholder {
    font-weight: 400;
    padding-left: ${vw(45)};
    color: #9b9b9b;
  }
`;

export const FooterText = styled.div`
  margin-top: ${vw(35)};
  padding-bottom: ${vw(35)};
  text-align: center;
  color: #a4a3a5;
  font-size: ${vw(14)};
`;
