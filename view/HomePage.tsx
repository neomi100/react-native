import { useEffect } from "react";
import ProductsList from "../cmps/ProductsList";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../store/productsStore/productsAction";
import { View, StyleSheet, Text } from 'react-native';

export default function HomePage() {
  const { products } = useSelector((state: any) => state.productsModule);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [products]);

  if (!products) return <View><Text>Loading&#8230;</Text></View>;
  return (
    <View>
      <View style={[styles.page]}>
        <ProductsList products={products} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  page: {
    margin: ' 0, 30: px, 0'
  },
  //   loading: { style={[styles.loading]}
  //     position: 'fixed',
  //     z- index: 999,
  //   height: 2 + 'em',
  //   width: 2 + 'em',
  //   overflow: 'visible',
  //   margin: 'auto',
  //   top: 0,
  //   left: 0,
  //   bottom: 0,
  //   right: 0
  // },
  //   loading: before {
  //   content: '';
  //   display: 'block',
  //   position: 'fixed',
  //   top: 0;
  //   left: 0;
  //   width: 100 + '%',
  //   height: 100 + '%',
  //   backgroundColor: 'rgba(0, 0, 0, 0.3)'
  // },
  //   loading: not(: required) {
  //   font: 0 / 0 'a',
  //   color: 'transparent',
  //   textShadow: 'none',
  //   backgroundColor: 'transparent'
  //   border: 0
  // },
  //   loading: not(: required): after {
  //     content: '',
  //     display: 'block',
  //     fontSize: 10 + 'px',
  //     width: 1 + 'em',
  //     height: 1 + 'em',
  //     marginTop: -0.5 + 'em',
  //   - webkit - animation: spinner 1500ms infinite linear;
  // -moz - animation: spinner 1500ms infinite linear;
  // -ms - animation: spinner 1500ms infinite linear;
  // -o - animation: spinner 1500ms infinite linear;
  // animation: spinner 1500ms infinite linear;
  // border - radius: 0.5em;
  // -webkit - box - shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) - 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) - 1.5em 0 0 0, rgba(0, 0, 0, 0.5) - 1.1em - 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 - 1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em - 1.1em 0 0;
  // box - shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) - 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) - 1.5em 0 0 0, rgba(0, 0, 0, 0.75) - 1.1em - 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 - 1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em - 1.1em 0 0;
  // },
  // @-webkit - keyframes spinner {
  //   0 % {
  //     - webkit - transform: rotate(0deg);
  //   -moz - transform: rotate(0deg);
  //   -ms - transform: rotate(0deg);
  //   -o - transform: rotate(0deg);
  //   transform: rotate(0deg);
  // }
  // 100 % {
  //     - webkit - transform: rotate(360deg);
  // -moz - transform: rotate(360deg);
  // -ms - transform: rotate(360deg);
  // -o - transform: rotate(360deg);
  // transform: rotate(360deg);
  //   }
  // }
  // @-moz - keyframes spinner {
  //   0 % {
  //     - webkit - transform: rotate(0deg);
  //   -moz - transform: rotate(0deg);
  //   -ms - transform: rotate(0deg);
  //   -o - transform: rotate(0deg);
  //   transform: rotate(0deg);
  // }
  // 100 % {
  //     - webkit - transform: rotate(360deg);
  // -moz - transform: rotate(360deg);
  // -ms - transform: rotate(360deg);
  // -o - transform: rotate(360deg);
  // transform: rotate(360deg);
  //   }
  // }
  // @-o - keyframes spinner {
  //   0 % {
  //     - webkit - transform: rotate(0deg);
  //   -moz - transform: rotate(0deg);
  //   -ms - transform: rotate(0deg);
  //   -o - transform: rotate(0deg);
  //   transform: rotate(0deg);
  // }
  // 100 % {
  //     - webkit - transform: rotate(360deg);
  // -moz - transform: rotate(360deg);
  // -ms - transform: rotate(360deg);
  // -o - transform: rotate(360deg);
  // transform: rotate(360deg);
  //   }
  // }
  // @keyframes spinner {
  //   0 % {
  //     - webkit - transform: rotate(0deg);
  //   -moz - transform: rotate(0deg);
  //   -ms - transform: rotate(0deg);
  //   -o - transform: rotate(0deg);
  //   transform: rotate(0deg);
  // }
  // 100 % {
  //     - webkit - transform: rotate(360deg);
  // -moz - transform: rotate(360deg);
  // -ms - transform: rotate(360deg);
  // -o - transform: rotate(360deg);
  // transform: rotate(360deg);
  //   }

})



