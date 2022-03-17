import { useEffect, useState } from "react";
import { View } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { cartService } from "../services/cartService";
import { productsService } from "../services/productsService";
import { setCart, setCartToShow } from "../store/cartStore/cartAction";
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../cmps/Header";
import HomePage from "./HomePage";
import MyCart from "./MyCart";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AsyncStorage } from 'react-native';


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
  const Stack = createNativeStackNavigator()

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
      const cartFromLocalStorege = await AsyncStorage.getItem('CART')
      updateCart = cartFromLocalStorege ? JSON.parse(cartFromLocalStorege)
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
      <NavigationContainer>
        <Header />
        <Stack.Navigator initialRouteName="Home" key="root">
          <Stack.Screen name='Signup' component={SignupPage} />
          <Stack.Screen name='Login' component={LoginPage} />
          <Stack.Screen name='Cart' component={MyCart} />
          <Stack.Screen name='Home' component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}
export default ShoppingApp

