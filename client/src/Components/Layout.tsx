import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=' flex flex-wrap justify-between mx-auto gap-10'>
      <Sidebar />
      {children}
      <RightSidebar />
    </div>
  );
};

export default Layout;
