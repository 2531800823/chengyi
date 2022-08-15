import { memo } from 'react';

import { MyABout } from '@/components';
import ProServe from './serverZou';
import ServerFlow from './serverFlow';
import XinWen from './xinWen';

const IndexPage = () => {
  return (
    <>
      <MyABout />
      <ProServe />
      <ServerFlow />
      <XinWen />
    </>
  );
};
export default memo(IndexPage);
