import {ProductCardContainer} from './ProductCard.styled';

import React, { useContext } from 'react'
import Button, {BUTTON_TYPES_CLASSES} from '../components/button/Button';
import { CartContext } from '../context/CartContext';


const ProductCard = ({product}) => {
  const {name, price, imageUrl} = product;
 const {addItemToCart} = useContext(CartContext);

 const addProductToCart = () => addItemToCart(product)

  return (
    <div className='product-card-container'>
      <img src={`${imageUrl}`} alt={`${name}`}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        <Button onClick={()=>addProductToCart(product)} buttonType={BUTTON_TYPES_CLASSES.inverted}>Add To Cart</Button>
      </div>
    </div>
  )
}

export default ProductCard
