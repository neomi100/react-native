import { useEffect, useState } from "react";
import ProductPreview from "./ProductPreview";
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';

export default function ProductsList({ products }: any) {
  const [productsPage, setProductsPage] = useState(products);
  const [pageIdx, setPageIdx] = useState(0);
  const PAGE_QUANTITY = 6;

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
  }, [pageIdx]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <View style={[styles.shell]}>
      <FlatList style={[styles.list]}>
        {productsPage.map((product: any) => {
          return (
            <FlatList key={product._id} style={[styles.previewContainer]}>
              <ProductPreview product={product} />
            </FlatList>
          );
        })}
      </FlatList>
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
            style={[styles.next]}
            onPress={() => {
              setPageIdx(pageIdx + 1);
            }}
          >
            <Text>≥</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  shell: {
    flexDirection: 'column',
    height: 95 + 'vh',
    justifyContent: 'space-between'
  },
  list: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    margin: 20, 'px': 0, 0: 0,
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
  pagenation: {
    justifyContent: 'center',
    color: 'darkslategrey',
    paddingBottom: 20 + 'px',
    alignItems: 'center',
    marginTop: 20 + 'px'
  },
  prev: {
    backgroundColor: 'red'
  },
  next: {
    backgroundColor: 'red'
  }
})