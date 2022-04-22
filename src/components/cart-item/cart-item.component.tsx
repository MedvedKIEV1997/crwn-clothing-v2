import { FC, memo } from "react";
import { CartItem } from "../../store/cart/cart.types";
import {
  CartItemContainer,
  ItemDetails,
  Name,
  Price,
} from "./cart-item.styles";

type CartItemProps = {
  cartItem: CartItem;
};

const CartItemComponent: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price className="price">
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItemComponent;
