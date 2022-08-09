import { FC } from 'react';
interface BottomProps {}

const Bottom: FC<BottomProps> = (props) => {
  const {} = props;
  console.log('Bottom');
  return (
    <div className="bottom">
      {' '}
      {Array(4)
        .fill(0)
        .map((item, index) => {
          return <span key={index}>1</span>;
        })}
    </div>
  );
};

export default Bottom;
