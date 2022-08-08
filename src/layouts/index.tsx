import React, {FC} from 'react';
import App from '../pages';
interface indexProps {}
import '../global.css';

const index: FC<indexProps> = props => {
  const {} = props;
  return (
    <div>
      <App />
    </div>
  );
};

export default index;
