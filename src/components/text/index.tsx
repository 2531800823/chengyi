import { FC, memo } from 'react';
import { MyABoutDiv } from './style';

interface MyTextProps {
  url: string;
}

export const MyText: FC<MyTextProps> = memo(({ url }) => {
  console.log('MyText');
  return (
    <MyABoutDiv>
      <img src={url} alt="" />
    </MyABoutDiv>
  );
});
