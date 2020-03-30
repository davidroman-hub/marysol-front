
import React, {useEffect,useState} from 'react';
import Layout from './Layout'
import { getCategories, getFilteredProducts} from './apiCore'

import Card from '../admin/Card'
import Checkbox from './Checkbox'
import RadioBox from './RadioBox'
import {prices} from './FixedPrices'

window.addEventListener('scroll', () => {
  const header = document.getElementById('header-content');
    header.style.opacity = false})



const Menu = () => {
 
  const [categories, setCategories] = useState([])
  const [error, setError] =useState(false)

  /// state for fetch products
 
  const [limit, setLimit] = useState(6)
  const [skip, setSkip] = useState(0) 
  const [filteredResults, setFilteredResults] = useState([])

  const loadFilteredResults = (newFilters) => { 
    // console.log(newFilters)
    getFilteredProducts(skip, limit, newFilters).then( data => {
     if(data.error){
         setError(data.error)
     } else {
         setFilteredResults(data.data)
      }
  })
 };

 //////////////////////////////////////////////////////////////

  const [myFilters, setMyFilters] = useState({
    filters:{ category:[], price:[] }
  })


  const init = () => {
    getCategories().then( data => {
        if (data.error){
            setError(data.error)
        }else{
            setCategories(data)
        }
    }) 
}

useEffect(()=>{
  init();
  loadFilteredResults(skip,limit, myFilters.filters)
},[])

const handlePrice = value => {
  const data = prices;
  let array = [];
  for (let key in data) {
    if (data[key]._id === parseInt(value)){
      array = data[key].array
    }
  }
  return array
}


const handleFilters = (filters, filterBy) => {
  console.log('shop', filters, filterBy)
  const newFilters = {...myFilters}
  newFilters.filters[filterBy] = filters;
  
  // filter for the price method
  if(filterBy === 'price'){
    let priceValue = handlePrice(filters)
    newFilters.filters[filterBy] = priceValue;
    setMyFilters(newFilters);
  }

  // we gona fetch the filtered products

  loadFilteredResults(myFilters.filters)

  setMyFilters(newFilters)
}


// const loadFilteredResults = (newFilters) => {
//   console.log(newFilters)
// }

  return (
        <Layout>
          {/* <div className='row'>
          {JSON.stringify(categories)}
          </div> */}
          <div className="shop-container">
          <h1 className="mb-4 text-center">Nuestro Menu</h1>

         <div className="About-shop-container">
                            <div className="about-us">
                            <h4>Filtrar Por Categorias</h4>
                            <Checkbox categories={categories}
                                  handleFilters={ filters => 
                                    handleFilters(filters,'category')}
                                  />
                            </div>
                            <hr/>
                       
                            <div className="shop-us-des">
                            <h4>Filtrar por precios</h4> 
                                          <RadioBox 
                                 className='box'         
                                prices={prices}
                                handleFilters={filters=> 
                                  handleFilters(filters,'price')}
                                /> 
                              </div>
                        </div>



         
                <hr/>
              <div className="menu-coin">
                
                  <div className="row">
                  {filteredResults.map((product,i)=>(
                     <div key={i} >
                          <Card  product={product}/>
                      </div>   
                    
                 ))}
                  </div>
                </div>
                </div>
                  {/* {JSON.stringify(myFilters)} */}
                  {/* {JSON.stringify(filteredResults)} */}
     
      
          
          <div id='header-content' />
        </Layout>
    )}

export default Menu 