"use client"

import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductCarousel from './components/ProductCarousel';
import AppPromo from './components/AppPromo';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useState } from 'react';

export default function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="font-sans">
      
      <Header />
      <SearchBar search={search} onSearch={setSearch} />
      <ProductCarousel search={search} />
      <AppPromo />
      <Footer />
    </div>
  );
}