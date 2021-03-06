import React,{Fragment, useEffect, useState} from 'react';
import Layout from './core/Layout'
import {Link} from 'react-router-dom'
import Map from './GoogleMap'
import Footer from './Footer'
import {getProducts} from '../src/admin/apiAdmin'
import Photos2 from './Photos'
// Photos

import logo1 from './img/logo1.png'
import vuelve from './img/quesadilla.jpg'
//import slider3 from './img/tostadaP.jpg'
import slider2 from './img/bruja1.jpg'
import slider1 from './img/pulpo2ç2.jpg'
import banner from './img/banner.jpg'
import service from './img/tostapul.jpg'
import Card from './admin/Card'
//styles
import './App.scss'
import './Home.scss'


// window.addEventListener('scroll', () => {
//   const header = document.getElementById('header-content');
//     header.style.opacity = '1'- window.pageYOffset / 650;})

    



const Home = () => {

  // get the products method for sell and arrival

  // const [productsBySell, setProductsBySell] = useState([]);
  // const [productsByArrival, setProductsByArrival] = useState([]);
  // const [error, setError] = useState(false)

  const [productsBySell, setProductsBySell] = useState([])
  const [productsByArrival, setProductsByArrival] = useState([])
  const [error, setError] = useState(false)   
 
 

  const loadProductBySell = () => {
    getProducts('sold').then(
      data =>{
        if (data.error) {
          setError(data.error)
        } else {
          setProductsBySell(data)
        }
      })
  }

  const loadProductByArrival = () => {
    getProducts('createdAt').then(
      data => {
        if (data.error){
          setError(data.error)
        } else {
          setProductsByArrival(data)
        }
      })
  }

useEffect(()=>{
  loadProductByArrival();
  loadProductBySell()
},[])




  return (
    <Fragment>
         
                 <header className="header-content "  id="header-content">
                    <div className="header-text">   
                      <p className='Logo1'>
                        <img alt='Logo1' height="300px" src={logo1}/>
                      </p>
                      <p className="arrow">
                         Más información desplazandose hacia abajo
                      </p>
                    </div>
                </header> 

                 <main>
                    <section className="container" id="header-content">
                        <hr/>
                        <h1 className=" h2-subtitle ">
                        Bienvenidos a nuestro Restaurante
                        </h1>
                        <div className="About-container">
                            <div className="about-us">
                              <img alt='Vuelve a la vida' height="250px" src={vuelve}/>
                            </div>
                            <hr/>
                            <div className="about-us-des">
                              <br/>
                              <span className="capital-letter">M</span>ar y Sol<br/> 
                              Un nuevo concepto que hemos diseñado minuciosamente, para entregarle a nuestros clientes
                              la mejor calidad en productos provenientes del fruto del mar.
                              </div>
                        </div>
                        <br/>
                        <br/>
                        <hr/>
                                  {/* banner Start*/}   
                          <div className="banner-container">
                            <hr/>
                              <div className="card text-center  mr-5 ml-5 mb-5">
                                <div className="card-body">
                                    <h4 className="card-title">El auténtico sabor Jarocho</h4>
                                  
                                    <p className="card-text">Traemos el sabor de la cocina Veracruzana a tu paladar, con las especialidades del
                                      Puerto de Veracruz, como: Vuelve a la vida, Tostadas de Pulpo, Arroz a la tumbada entre otros..
                                    </p>
                                    <hr/>
                                    <Link to='/menu' className="btn btn-dark">Menu</Link>
                                </div>
                              </div>
                            </div>
                      
                                  {/* banner finished*/}       
                                  <br/>
                                  <br/>
                                  <hr/>
                                  <h1 className=" h2-subtitle">
                               Qué es este nuevo concepto?
                                </h1>
                                <div className="About-container">
                                    <div className="about-concept">
                                      <img alt='excelente servicio' height="230px" src={service}/>
                                    </div>
                                    <hr/>
                                    <div className="about-us-des">
                                      <br/>
                                      <span className="capital-letter">M</span>ar y Sol<br/> 
                                        no es solo una página ordinaria donde podrás ver nuestro Menu, es una plataforma entera, con la cual podrás regístrarte
                                        y ordenar productos desde la comodidad de tu hogar con entrega a domicilio en un radio de 5km. Podrás hacer reservaciones Vía telefónica.
                                        Te invitamos a que te registres para conocer las características de nuestra plataforma.
                                        <br />
                                        <Link to="/signup">Registrate</Link>
                                      </div>                
                                </div>
                                  
                            <br/>
                            <hr/>
                            
                              <h2 className='text-center'>Ubicación</h2>
                              <p className='text-center'> Atzayacatl 79, Tlaxpana, Miguel Hidalgo, 11370 Ciudad de México, CDMX</p>
                            <div className="Map-ps">
                             <Map/>
                            </div>
                            <br/>
                            <p className='text-center'>Reservaciones:</p>
                            <p className='text-center'>Número de contacto: 55-55-35-52-80 <i class="fab fa-whatsapp"></i></p>
                            <hr/>
                            {/* {JSON.stringify(productsBySell)}
                            <hr/>
                            {JSON.stringify(productsBySell)}
                            <hr/> */}
                              <h2 className="mb-4 text-center">Lo Más vendido</h2>
                                  <div className='container-card-new row'>
                                      {productsBySell.map((products, i)=>(
                                      <Card key={i} product={products}/>
                                      ))}
                                  </div>
                             <Footer/>
                      </section>
                </main>    
            </Fragment>
  )
}


const CarouselMyS = () => (
 <main id='main1'>
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className='carousel-inner'>
            <div className='carousel-item active'>
            <img className='tres' src={slider1} class="d-block w-100" alt="slider 1"/>
                <div className="carousel-caption d-none d-md-block">
                <h2 id="resultados">Cevicheria</h2>
                <h2 id="resultados">Mar y Sol</h2>
                     <p id="resultados">Bienvenidos</p>
                </div>
            </div>
            <div className='carousel-item '>
             <img  className='tres' src={slider2} class="d-block w-100" alt="slider 1"/>
                <div className="carousel-caption d-none d-md-block">
                <h5 id="resultados">Auténtica tradición desde hace 40 años</h5>
                     
                </div>
            </div>
            {/* <div className='carousel-item '>
             <img  className='tres' src={slider3} class="d-block w-100" alt="slider 1"/>
                <div className="carousel-caption d-none d-md-block">
                <h5 id="resultados">Almejas Vivas</h5>
                     <p id="resultados">Solo para paladares exigentes</p>
                </div>
            </div> */}
        </div>
        
    </div>
    <Fragment>
    {/* <footer id="footer" className="pb-4 pt-4">
    <div className="conatiner">
      <div className="row text-center">
        <div className="col-12 col-lg">
          <a href="#">Contacto</a>
        </div>
        <div className="col-12 col-lg">
          <a href="#">Terminos y condiciones</a>
        </div>
        <div className="col-12 col-lg">
          <a href="#">Privacidad</a>
        </div>
      </div>
    </div>
   </footer> */}
    </Fragment>
    </main> 
)

//const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.REACT_MAP_KEY}` 




const App = () => {
  return (
    <Layout>
  {CarouselMyS()}
      {Home()}
      <hr/>
    
    </Layout>
    
  )
}

export default App;
