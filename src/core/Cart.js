import React,{ useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Layout from './Layout'
import {getCart} from './CartHelpers'
import Card from '../admin/Card'


window.addEventListener('scroll', () => {
    const header = document.getElementById('header-content');
      header.style.opacity = false})



const Cart = () => {

    const [item, setItem] = useState([])

    useEffect(() => {
        setItem(getCart)
    },[])

    const showItem = () => {
        return(
            <div>
                <h2>Tu orden tiene {`${item.length}` } platillos</h2>
                <hr/>
                {item.map((product,i)=>(
                    <Card key={i} product={product}/>
                ))}
            </div>
        )
    }

    const notItemMessage = () => (
        <h2>Your cart is empty.<br/> <Link to='/shop'>Contina Comprando</Link></h2>
    )

    return (
    <Layout title="Shopping Cart" 
        description="Manage your cart item. Add remove or continue shopping" 
        className='container-fluid'>

    <div className='row'>
        <div className='col-6'>
            {item.length > 0 ? showItem(item) : notItemMessage()}
        </div>
        <div className='col-6'>
        <p> Show checkout options/shipping address/ total/ update quantity</p>
        </div>
    </div>
            <div id='header-content'/>
    </Layout>
    )
}

export default Cart 