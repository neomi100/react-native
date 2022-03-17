import { useEffect, useState } from "react";
import CartPreview from "./CartPreview";
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';

export default function CartList({ products }: any) {
  const [productsPage, setProductsPage] = useState(products);
  const [pageIdx, setPageIdx] = useState(0);
  const PAGE_QUANTITY = 6;
  const prices = products.map((p: any) => p.amount * p.PriceLabel);

  let sum = 0;

  useEffect(() => {
    if (
      pageIdx * PAGE_QUANTITY >= products.length ||
      pageIdx + 1 < 0 ||
      pageIdx - 1 < 0
    ) {
      setPageIdx(0);
    }
    const productsForShow = () => {
      var fromIdx = pageIdx * PAGE_QUANTITY;
      var toIdx = fromIdx + PAGE_QUANTITY;
      setProductsPage(products.slice(fromIdx, toIdx));
    };

    productsForShow();
    scrollToTop();
  }, [pageIdx, products]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
  }

  return (
    <>
      {products.length > 0 && (
        <View style={[styles.cartList]} style={[styles.shell]}>
          <FlatList style={[styles.list]}>
            {productsPage.map((product: any, idx: string) => (
              <FlatList key={idx} style={[styles.previewContainer]}>
                <CartPreview product={product} />
              </FlatList>
            ))}
          </FlatList>
          <View style={[styles.totalPrice]}>
            Total price: ${parseFloat(sum.toFixed(2))}
          </View>
          {products.length > 6 && (
            <View style={[styles.pagenation]}>
              {pageIdx >= 1 && (
                <TouchableOpacity
                  style={[styles.prev]}
                  onPress={() => {
                    setPageIdx(pageIdx - 1);
                  }}
                >
                  <Text>≤</Text>
                </TouchableOpacity>
              )}
              {pageIdx > 0 ? pageIdx + 1 : 1}
              {pageIdx + 1 <= products.length / PAGE_QUANTITY && (
                <TouchableOpacity
                  style={styles.next}
                  onPress={() => {
                    setPageIdx(pageIdx + 1);
                  }}
                >
                  <Text>≥</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  cartList: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  shell: {
    flexDirection: 'column',
    height: 95 + 'vh',
    justifyContent: 'space-between'
  },
  list: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 10 + 'px',
    fontSize: 95
  },
  previewContainer: {
    borderRadius: 7,
    width: 333 + 'px',
    flexDirection: 'column',
    padding: 10 + 'px',
    justifyContent: 'space-between'
  },
  totalPrice: {
    marginBottom: 9 + 'px',
    fontSize: 1.7,
    borderRadius: 4,
    textAlign: 'center',
    padding: 30 + 'px',
    color: '#a58e65'
  },
  pagenation: {
    justifyContent: 'center',
    color: 'darkslategrey',
    paddingBottom: 20 + 'px',
    alignItems: 'center',
    marginTop: 20 + 'px'
  },
  prev: {
    backgroundColor: '#8b008b',
  },
  next: {
    backgroundColor: '#8b008b',
  }
})