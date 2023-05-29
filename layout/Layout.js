import React from 'react';
import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title> Kodego-WD53 || Devengers Vault - CAPSTONE PRJ. </title>
      </Head>
      <header>
        <Header />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout