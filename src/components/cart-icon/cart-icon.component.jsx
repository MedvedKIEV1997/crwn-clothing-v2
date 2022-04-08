import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, itemsCount } = useContext(CartContext);

  const handleHidden = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={handleHidden}>
      <ShoppingIcon />
      <ItemCount className="item-count">{itemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
