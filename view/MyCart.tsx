import { useSelector, useDispatch } from "react-redux";
import CartList from "../cmps/CartList";
import { useEffect } from "react";
import { productsService } from "../services/productsService";
import { setCartToShow } from "../store/cartStore/cartAction";
import { Text, View, StyleSheet } from 'react-native';

export default function MyCart() {
  const { cartToShow, cart } = useSelector((state: any) => state.cartModule);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, [cart]);

  const getProducts = async () => {
    if (cart.length) {
      const productsToShow = await productsService.getProductsByIds(cart);
      dispatch(setCartToShow(productsToShow));
    }
  };

  if (!cart.length)
    return (
      <Text style={[styles.emptyCart]}>
        ARE YOU KIDDING ME? WHY AM I STILL EMPTY?
      </Text>
    );
  return (
    <View>
      <View style={[styles.page]}>
        <CartList products={cartToShow} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  page: {
    margin: '0, 30: px, 0'
  },
  emptyCart: {
    width: 60 + '%',
    top: 40 + '%',
    left: 50 + '%',
    borderRadius: 4,
    textAlign: 'center',
    padding: 30 + 'px',
    color: '#a58e65'
  }
})