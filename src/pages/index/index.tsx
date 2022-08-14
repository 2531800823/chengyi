import { useState, MouseEvent, useRef, memo } from 'react';
import { vw } from '@/utils';

import { MyABout } from '@/components';

const IndexPage = () => {
  return (
    <>
      <MyABout></MyABout>
    </>
  );
};
export default memo(IndexPage);
