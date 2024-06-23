import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <div className="bg-dustyBlue1 w-full">
        <div className="">{children}</div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
