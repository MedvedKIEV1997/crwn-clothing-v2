import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  decrementItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItem } from "../../store/cart/cart.types";
import {
  Arrow,
  BaseField,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  Remove,
  Value,
} from "./checkout-item.styles";

type CheckoutItemProps = {
  item: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = memo(({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const incrementItemHandler = () => dispatch(addItemToCart(cartItems, item));
  const decrementItemHandler = () =>
    dispatch(decrementItemFromCart(cartItems, item));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, item));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseField>{name}</BaseField>
      <Quantity>
        <Arrow onClick={decrementItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={incrementItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseField>{price}</BaseField>
      <Remove onClick={removeItemHandler}>&#10005;</Remove>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
