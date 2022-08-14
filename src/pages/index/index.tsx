import { useState, MouseEvent, useRef, memo } from 'react';
import { vw } from '@/utils';

import { DataZou } from '@/common/zoumadeng';
import MyABout from '@/components/myAbout';

const IndexPage = () => {
  return (
    <>
      <MyABout></MyABout>
    </>
  );
};
export default memo(IndexPage);
