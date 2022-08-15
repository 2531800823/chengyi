import { useState, MouseEvent, useRef, memo } from 'react';
import { vw } from '@/utils';

import { MyABout } from '@/components';
import ProServe from './serverZou';

const IndexPage = () => {
  return (
    <>
      <MyABout />
      <ProServe />
    </>
  );
};
export default memo(IndexPage);
