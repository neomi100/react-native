import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartStore/cartAction";
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { Paragraph } from 'react-native-paper';
export default function ProductPreview({ product }: any) {
  const { loggedinUser } = useSelector((state: any) => state.userModule);
  const dispatch = useDispatch();

  const addProduct = (product: any) => {
    const userId = loggedinUser ? loggedinUser._id : null;
    dispatch(addToCart(product, userId));
  };

  return (
    <View style={[styles.productPreview]}>
      <Image source={product.ProductImage} style={[styles.img]} />
      <View style={[styles.preview]}>
        <View style={[styles.productDitails]}>
          <Paragraph>{product.ProductTitle}</Paragraph>
          <Paragraph style={[styles.price]}>{product.Price}</Paragraph>
        </View>
        <TouchableOpacity
          style={[styles.addToCart]}
          onPress={() => addProduct(product)}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  productPreview: {
    borderRadius: 7,
    width: 333 + 'px',
    flexDirection: 'column',
    padding: 10 + 'px',
    justifyContent: 'space-between'
  },
  img: {
    width: 100 + '%',
    height: 220 + 'px',
    borderRadius: 7
  },
  preview: {
    flexDirection: 'row',
    height: 60 + 'px',
    justifyContent: 'space-between'
  },
  productDitails: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 13 + 'px',
  },
  price: {
    fontSize: 0.8,
    color: '#635f5fde'
  },
  addToCart: {
    marginRight: 7 + 'px',
  }
})