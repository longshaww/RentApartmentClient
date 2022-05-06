import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarApp from '../components/Navbar';
import Footer from "../components/Footer"

const Layout: React.FC = () => {
  return (
    <>
      <NavbarApp />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
