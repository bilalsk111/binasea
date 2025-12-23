import React from 'react'
import Navbar from './components/Navbar';
import Landing from './components/landing';
import AllCategories from './components/AllCategories';
import NFTCard from './components/NFTCard';
import HotPick from './components/HotPick';
import Collections from './components/Collections';
import TopSeller from './components/TopSeller';
import Explore from './components/Explore';
import Footer from './components/Footer';


const App = () => {
  return (
   <div>
     <div className='bg-[#191820] w-full min-h-screen text-white p-10'>
      <Navbar />
      <Landing />
      <AllCategories />
      <NFTCard />
      <HotPick />
      <Collections />
      <TopSeller />
      <Explore />
    </div>
    <Footer />
   </div>

  )
}

export default App;

