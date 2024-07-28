import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Category from './Components/Category'
import Category2 from './Components/Category2'
import Services from './Components/Services'
import Banner from './Components/Banner'
import headphone from "./assets/hero/headphone.png"
import Product from './Components/Product'
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png"
import Blogs from './Components/Blogs'
import Partners from './Components/Partners'
import Footer from './Components/Footer'
import Popup from './Components/Popup'
import AOS from "aos"
import "aos/dist/aos.css"
import Aboutus from './Components/Aboutus'

const BannerData ={
  discount:"30% Off",
  title:"Fine Smile",
  date:"10 Jan to 28 Jan",
  image:headphone,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"Lorem ipsum,dolar sit amet consectetur adipisicing elit.Eaque reiciendis",
  bgColor:"#f42c37",
};

const BannerData2 ={
  discount:"30% Off",
  title:"Happy Hours",
  date:"14 Jan to 28 Jan",
  image:smartwatch2,
  title2:"Smart Solo ",
  title3:"Winter Sale",
  title4:"Lorem ipsum,dolar sit amet consectetur adipisicing elit.Eaque reiciendis",
  bgColor:"#2dcc6f",
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup =() =>{
    setOrderPopup(!orderPopup);
  };

  React.useEffect(()=>{
    AOS.init({
      duration:800,
      easing:"ease-in-sine",
      delay:100,
      offset:100,
    });
    AOS.refresh();
  },[]);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero  handleOrderPopup={handleOrderPopup}/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Product/>
      <Banner data={BannerData2}/>
      <Blogs/>
      <Aboutus/>
      <Partners/>
      <Footer/>
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
    </div>
  )
}

export default App