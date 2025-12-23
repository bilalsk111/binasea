import React from 'react'
import Navbar from './components/Navbar.jsx';
import Landing from './components/Landing.jsx';
import AllCategories from './components/AllCategories.jsx';
import NFTCard from './components/NFTCard.jsx';
import HotPick from './components/HotPick.jsx';
import Collections from './components/Collections.jsx';
import TopSeller from './components/TopSeller.jsx';
import Explore from './components/Explore.jsx';
import Footer from './components/Footer.jsx';


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

