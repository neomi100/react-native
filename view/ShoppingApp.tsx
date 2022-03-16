import React from 'react'
import { useEffect, useState } from "react";
import { View } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { cartService } from "../services/cartService";
import { productsService } from "../services/productsService";
import { setCart, setCartToShow } from "../store/cartStore/cartAction";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../cmps/Header";
import HomePage from "./HomePage";
import MyCart from "./MyCart";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";

export type ShoppingCartItemType = {
  productsIds: [],
  userId: string
}
export type UserType = {
  username: string,
  password: string,
  imagUrl: string,
  id: string,
  productsInCart: []
}

const ShoppingApp = () => {
  const { cart } = useSelector((state: any) => state.cartModule)
  const { loggedinUser } = useSelector((state: any) => state.userModule);
  const [isFrist, setIsFrist] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    getInitialCart();
  }, [loggedinUser]);

  const getInitialCart = async () => {
    let updateCart = cart;
    if (!isFrist && loggedinUser && cart.length) {
      setIsFrist(true);
      const { _id: userId } = loggedinUser;
      updateCart = await cartService.addToCart(cart, userId);
      dispatch(setCart(updateCart.productsIds));
    }
    if (loggedinUser) {
      setIsFrist(true);
      const { _id: userId } = loggedinUser;
      updateCart = await cartService.getCart(userId);
      dispatch(setCart(updateCart.productsIds));
    } else {
      setIsFrist(false);
      updateCart = localStorage.CART
        ? JSON.parse(localStorage.CART)
        : { userId: null, productsIds: [] };
    }
    if (updateCart.productsIds.length) {
      const productsToShow = await productsService.getProductsByIds(
        updateCart.productsIds
      );
      dispatch(setCartToShow(productsToShow));
    }
  };

  return (
    <View>
      <Router>
        <Header />
        <Switch>
          <Route path="/Signup" component={SignupPage} />
          <Route path="/Login" component={LoginPage} />
          <Route path="/cart" component={MyCart} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </View>
  )
}
export default ShoppingApp

