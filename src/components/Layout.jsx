import React from 'react';
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>
     
    </div>
  );
};

export default Layout;