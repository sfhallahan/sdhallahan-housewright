import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './main.css';

export default props => (
  <div>
    <Header />
    {props.children()}
    <Footer />
  </div>
);
