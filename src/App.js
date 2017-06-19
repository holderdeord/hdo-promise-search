import React from 'react';
import './App.scss';

import Header from './Header';
import Search from './Search';
import Services from './Services';
import Footer from './Footer';

export default () =>
    <div>
        <Header />
        <Search />
        <Services />
        <Footer />
    </div>;
