import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navigation';

function Layout() {
  return (
    <>
      <Navbar books="/" categories="/categories" />
      <Outlet />
    </>
  );
}

export default Layout;
