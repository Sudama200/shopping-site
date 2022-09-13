import React, { useContext } from 'react'
import {CartIconContainer, ShoppingIcon, ItemCount} from './CartIcon.styles';
// import { ReactComponent as ShoppingBag } from '../../assets/shopping.svg';
import { CartContext } from '../../context/CartContext';
import OutsideClickHandler from 'react-outside-click-handler';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }
      
  return (
    <OutsideClickHandler
     onOutsideClick = {() => {
      if(isCartOpen){
        setIsCartOpen(!isCartOpen)
      }
     }}
    >
      <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <ItemCount>{cartCount}</ItemCount>
      </CartIconContainer>
    </OutsideClickHandler>
  )
}

export default CartIcon



  