import React, { FC, ReactNode } from 'react';
import 'amfe-flexible';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface indexProps {
  children: ReactNode;
}
const index: FC<indexProps> = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default index;
