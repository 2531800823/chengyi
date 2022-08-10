import React, { FC, memo } from 'react';
import styled from '@emotion/styled';
import { vw } from '@/utils';

import BackTop from '@/../public/images/7-页底/返回顶部.png';

interface ScrollTopProps {}

export const ScrollTop: FC<ScrollTopProps> = memo(() => (
  <ScrollTopDiv
    src={BackTop}
    onClick={() => window.scrollTo(0, 0)}></ScrollTopDiv>
));

const ScrollTopDiv = styled.img`
  display: block;
  position: fixed;
  bottom: ${vw(196)};
  right: ${vw(20)};
  width: ${vw(80)};
  height: ${vw(80)};
`;
