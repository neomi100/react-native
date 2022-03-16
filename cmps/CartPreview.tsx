import React from "react";
import { Image, View, StyleSheet } from 'react-native';
import { Paragraph } from 'react-native-paper';

export default function CartPreview({ product }: any) {
  return (
    <View style={[styles.productPreview]}>
      <Image source={product.ProductImage} style={[styles.img]} />
      <View style={[styles.preview]}>
        <View style={[styles.productDitails]}>
          <Paragraph>{product.ProductTitle}</Paragraph>
          <Paragraph style={[styles.price]}>{product.Price}</Paragraph>
        </View>
        <Paragraph style={[styles.amount]}>+ {product.amount}</Paragraph>
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
    gap: 7 + 'px'
  },
  price: {
    fontSize: 0.8,
    color: '#635f5fde'
  },
  amount: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginRight: 13 + 'px'
  }
})