import { vw } from '@/utils';
import { FC, memo } from 'react';
import { MyABoutDiv } from './style';

interface MyTextProps {
  url: string;
  width: number;
  height: number;
}

export const MyText: FC<MyTextProps> = memo(({ url, width, height }) => {
  console.log('MyText');
  return (
    <MyABoutDiv>
      <img src={url} style={{ width: vw(width), height: vw(height) }} alt="" />
    </MyABoutDiv>
  );
});
