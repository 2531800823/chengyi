import { useState, MouseEvent, useRef, memo } from 'react';
import { vw } from '@/utils';

import { MyABout } from '@/components';
import ProServe from './serverZou';
import ServerFlow from './serverFlow';

const IndexPage = () => {
  return (
    <>
      <MyABout />
      <ProServe />
      <ServerFlow />
    </>
  );
};
export default memo(IndexPage);
