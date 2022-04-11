import { useDispatch, useSelector } from "react-redux";

import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectIsCartOpen,
  selectItemsCount,
} from "../../store/cart/cart.selector";

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemsCount = useSelector(selectItemsCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleHidden = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={handleHidden}>
      <ShoppingIcon />
      <ItemCount className="item-count">{itemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
