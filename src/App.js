import React,{Fragment} from 'react';
import Layout from './core/Layout'
import {Link} from 'react-router-dom'
import Map from './GoogleMap'
// Photos

import logo1 from './img/logo1.png'
import vuelve from './img/vuelve.jpg'
import slider3 from './img/tostadaP.jpg'
import slider2 from './img/salmon.jpg'
import slider1 from './img/paella.jpg'
import banner from './img/banner.jpg'


//styles
import './App.scss'
import './Home.scss'


window.addEventListener('scroll', () => {
  const header = document.getElementById('header-content');
    header.style.opacity = '1'- window.pageYOffset / 650;})




const Home = () => {
  return (
    <Fragment>
    
                <header className="header-content" id="header-content">
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
                    <section className="container">
                        <hr/>
                        <h1 className=" h2-subtitle">
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
                                      Puerto de Veracruz, como son: El Vuelve a la vida, Tostadas de Pulpo, arroz a la tumbada entre otros..
                                    </p>
                                    <hr/>
                                    <Link to='/menu' className="btn btn-dark">Menu</Link>
                                </div>
                              </div>
                            </div>
                                  {/* banner finished*/}       
                            <br/>
                            <hr/>
                              <h2>Ubicación</h2>
                         
                            <div className="about-us">
                             <Map/>
                            </div>
                            <hr/>
                            <div className="about-us">
                              <Link to="https://github.com"> yo</Link>
                              </div>
                      
                      </section>
                </main>    
            </Fragment>
  )
}


const CarouselMyS = () => (
{/* <main id='main1'>
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
                <h5 id="resultados">Almejas Vivas</h5>
                     <p id="resultados">Solo para paladares exigentes</p>
                </div>
            </div>
            <div className='carousel-item '>
             <img  className='tres' src={slider2} class="d-block w-100" alt="slider 1"/>
                <div className="carousel-caption d-none d-md-block">
                <h5 id="resultados">Mojarra Frita Ba;ada de salsa abanero</h5>
                     <p id="resultados">Si lo tuyo es el picante esto es para ti</p>
                </div>
            </div>
            <div className='carousel-item '>
             <img  className='tres' src={slider3} class="d-block w-100" alt="slider 1"/>
                <div className="carousel-caption d-none d-md-block">
                <h5 id="resultados">Almejas Vivas</h5>
                     <p id="resultados">Solo para paladares exigentes</p>
                </div>
            </div>
        </div>
        
    </div>
    <Fragment>
    <footer id="footer" className="pb-4 pt-4">
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
   </footer>
    </Fragment>
    </main> */}
)

//const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.REACT_MAP_KEY}` 




const App = () => {
  return (
    <Layout>
      {Home()}
    
    </Layout>
    
  )
}

export default App;
