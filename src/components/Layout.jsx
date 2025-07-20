import React from 'react';
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black dark:bg-gray-900">
      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>
     
    </div>
  );
};

export default Layout;