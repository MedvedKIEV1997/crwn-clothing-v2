import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  Arrow,
  BaseField,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  Remove,
  Value,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  const { addItemToCart, decrementItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  const incrementItemHandler = () => addItemToCart(item);
  const decrementItemHandler = () => decrementItemFromCart(item);
  const removeItemHandler = () => removeItemFromCart(item);

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
};

export default CheckoutItem;
