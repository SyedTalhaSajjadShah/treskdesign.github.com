import React from 'react';
import './App.css';
//import { NavLink } from 'react-router-dom';
import Cards from './Cards';
import Sdata from './Sdata';


const Products = () => {

function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style={display:"none"}  
  }
  document.getElementById(cityName).style={display:"block"};
};  



  return (
    <>
    <div className="row">
    <div className="col-lg-12 col-sm-12 float-sm-left mt-5">
    <h1 className="pph text-center">Our Metal Decor</h1>
    </div>
    </div>
    {/* <nav className="navbar navbar-expand-lg navbar-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse mt-3" id="navbarSupportedContent">
    
    <ul className="navbar-nav mb-2 mb-lg-0 p-2 pnmargin">
     
      <li className="nav-item ">
        <NavLink className="nav-link active " aria-current="page" to="/"><h5>All Products</h5></NavLink>
      </li>
      <li className="nav-item pl-5 fontfamilycls">
        <NavLink className="nav-link active" aria-current="page" to="/products"><h5>House Number</h5></NavLink>
      </li>
      <li className="nav-item pl-5 fontfamilycls">
        <NavLink className="nav-link active" aria-current="page" to="/contact"><h5>Love&Family</h5></NavLink>
      </li>
      <li className="nav-item pl-5 fontfamilycls">
        <NavLink className="nav-link active" aria-current="page" to="/about"><h5>Monogram</h5></NavLink>
      </li>
      
    </ul>
      
  </div>

  
</nav> */}
<div className="row">
<div className="col col-lg-12 col-sm-12 pnavbar mt-5">
{/* <div className="w3-bar w3-light mt-5 pnavbar"> */}
  <button className="w3-bar-item w3-button" onclick={openCity}><p className="fs-1">All Products</p></button>
  <button className="w3-bar-item w3-button" onclick={openCity}><p className="fs-1">House Number</p></button>
  <button className="w3-bar-item w3-button" onclick={openCity}><p className="fs-1">Love&Family</p></button>
  <button className="w3-bar-item w3-button" onclick={openCity}><p className="fs-1">Monogram</p></button>

</div>
</div>
<hr className="hrl"/>
<div id="Products" className="w3-container city">
<div className="container-fluid sizeofheading">
           
    <div className='row'>
            
          {/* {Sdata.map(ncard)}; */}
          
            <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[0].imgsrc}
                 title={Sdata[0].title}
                 paragraph={Sdata[0].paragraph}  
           />
           </div>
           
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[1].imgsrc}
                 title={Sdata[1].title}
                 
                 paragraph={Sdata[1].paragraph}
           />
           </div>

           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[2].imgsrc}
                 title={Sdata[2].title}
                 paragraph={Sdata[2].paragraph}
           />
           </div>

           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[3].imgsrc}
                 title={Sdata[3].title}
                 paragraph={Sdata[3].paragraph}
           />
           </div>
           </div>

           <div className='row mt-5'>
     <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[4].imgsrc}
                 title={Sdata[4].title}
                 paragraph={Sdata[4].paragraph}
           />
           </div>
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[5].imgsrc}
                 title={Sdata[5].title}
                 paragraph={Sdata[5].paragraph}
           />
           </div>
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[6].imgsrc}
                 title={Sdata[6].title}
                 paragraph={Sdata[6].paragraph}
           />
           </div>
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[7].imgsrc}
                 title={Sdata[7].title}
                 paragraph={Sdata[7].paragraph}
           />
           </div>
           </div>      
         {/*----Row 2 Start----*/}
        <div className='row forpadding mt-5'>
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[2].imgsrc}
                 title={Sdata[2].title}
                 paragraph={Sdata[2].paragraph}
           />
           </div>
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[2].imgsrc}
                 title={Sdata[2].title}
                 paragraph={Sdata[2].paragraph}
           />
           </div>
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[2].imgsrc}
                 title={Sdata[2].title}
                 paragraph={Sdata[2].paragraph}
           />
           </div>
           <div className='col-lg-3 col-sm-12'>
           <Cards
                 imgsrc={Sdata[2].imgsrc}
                 title={Sdata[2].title}
                 paragraph={Sdata[2].paragraph}
           />
           </div>
           </div> 
           </div>
           <button type="button" className="btn btn-outline-primary showall mb-5">Show All</button>

</div>

<div id="House Number" class="w3-container city" style={{display:"none"}}>
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p> 
</div>

<div id="Love&Family" class="w3-container city" style={{display:"none"}}>
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
</div>

<div id="Monogram" class="w3-container city" style={{display:"none"}}>
  <h2>London</h2>
  <p>London is the capital city of England.</p>
</div>
    </>
  );
}

export default Products;
