import React from 'react';
import  Navbar  from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import shoe4 from "./assets/images/shoe4.png"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import shoe1 from "./assets/images/sports-shoe1.jpeg"
import shoe2 from "./assets/images/sports-shoe2.jpeg"
import shoe3 from "./assets/images/sports-shoe3.jpeg"
// import shoe4 from "./assets/images/sports-shoe4.jpeg"
import shoe6 from "./assets/images/sports-shoe6.jpeg"
import shoe7 from "./assets/images/sports-shoe7.jpeg"
import shoe8 from "./assets/images/sports-shoe8.jpeg"
import shoe9 from "./assets/images/sports-shoe9.jpeg"
import shoe10 from "./assets/images/sports-shoe10.jpeg"
import shoe5 from "./assets/images/sports-shoe5.jpeg"
import ProductCard from './components/ProductCard';







library.add(faShoppingBag,faBars)

function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const productData = [
   {
    id : 1,
    imagesrc : shoe1,
    name : "Air Pro X3 Green",
    description : "Running Shoes",
    price : "$20.99"
  },
  {
    id : 2,
    imagesrc : shoe2,
    name : "Air Pro X3 Green",
    description : "Running Shoes",
    price : "$20.99"
  },
  {
    id : 3,
    imagesrc : shoe3,
    name : "Air Pro X3 Green",
    description : "Running Shoes",
    price : "$20.99"
  },
  {
    id : 4,
    imagesrc :  shoe4,
    name : "Air Pro X3 Green",
    description : "Running Shoes",
    price : "$20.99"
  },
  {
    id : 5,
    imagesrc : shoe5,
    name : "Air Pro X3 Green",
    description : "Running Shoes",
    price : "$20.99"
  },
  {
    id : 6,
    imagesrc : shoe6,
    name : "Air Pro X3 Green",
    description : "Running Shoes",
    price : "$20.99"
  },

  {
    id : 7,
    imagesrc :  shoe7,
    name : "Air Pro X3 Green",
    description : "Running Shoes",
    price : "$20.99"
  },
  {
    id : 8,
    imagesrc : shoe8,
    name : "Air Pro X3 Green",
    description : "Running Shoes",
    price : "$20.99"
  },
  {
    id : 9,
    imagesrc : shoe9,
    name : "Air Pro X3 Green",
    description : "Running Shoes",
    price : "$20.99"
  },
  {
    id : 10,
    imagesrc : shoe10,
    name : "Air Pro X3 Green",
    description : "Running Shoes",
    price : "$20.99"
  },


]

 const product = productData.map(items => 
  (
    <ProductCard name={items.name} imagesrc = {items.imagesrc} description = {items.description} price = {items.price}/>
  )
  )

  return (
    <div className='App'>
   <Navbar/>
   <main>
      <div className='main-image-container'>
       <img id='shoe-img' src = {shoe4} alt='shoe'/>
      </div>

     
        <div>
         <h2 className='main-title-container'>UNBELIEVABLE</h2>
         </div>
         
         <div>
          <h3 className='sub-title-container'>SPEED.COMFORT</h3>
          </div>

          <div className='Slider-container'>
          <Carousel responsive={responsive}>
          {product}
           

             

           

           
           </Carousel>

          </div>
          <Footer/>

          
         
       
      
    
      </main>
   </div>
  
  );
}

export default App;
