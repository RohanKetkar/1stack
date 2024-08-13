import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <h1>My Application</h1>
      </header>
      <main>
        <Outlet /> {/* Renders child routes */}
      </main>
    </div>
  );
};

export default Layout;