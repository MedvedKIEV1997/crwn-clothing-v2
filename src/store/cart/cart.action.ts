import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CategoryItem } from "../categories/category.types";
import { CartItem, CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decrementCartItem = (
  cartItems: CartItem[],
  productToDecrement: CategoryItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToDecrement.id
  );

  if (existingCartItem?.quantity === 1) {
    return removeCartItem(cartItems, productToDecrement);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToDecrement.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeCartItem = (
  cartItems: CartItem[],
  productToRemove: CategoryItem
): CartItem[] => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const decrementItemFromCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = decrementCartItem(cartItems, productToAdd);

  return setCartItems(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = removeCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const clearCart = withMatcher(
  (): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, [])
);
