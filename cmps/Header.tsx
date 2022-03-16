import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Header() {
  const { loggedinUser } = useSelector((state: any) => state.userModule);
  const { cart } = useSelector((state: any) => state.cartModule);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  return (
    <View style={[styles.appHeader]}>
      <View>
        <NavLink
          exact
          to="/"
          activeClassName="active"
          style={{ textDecoration: "none" }}
        >
          <Text style={[styles.logo]}>ENJOY</Text>
        </NavLink>
      </View>
      <View style={[styles.userHeader]}>
        {loggedinUser && <View style={[styles.hello]}>Hello {loggedinUser.username.substr(0, 5)}</View>}
        <View style={[styles.patch]}>
          <View style={[styles.coverage]}></View>
        </View>
        <NavLink exact to="/cart" activeClassName="active">
          <View style={[styles.cart]}></View>
        </NavLink>
        {cart && cart.length > 0 ? (
          <View style={[styles.quantityProducts]}>{cart.length}</View>
        ) : (
          <View style={[styles.noProducts]}></View>
        )}
        <View style={[styles.userMenu]}>
          <TouchableOpacity onPress={() => toggleModal()} />
          {loggedinUser ? (
            <Image source={loggedinUser.imgUrl} style={[styles.userMenuImg]} />
          ) : (
            <Image source={require("../assets/img/userGuest.jpg")}
              style={[styles.userMenuImg]}
            />
          )}
          {modalIsOpen && <Modal toggleModal={() => toggleModal()} />}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: '#fdf7f4',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '2px solid #f8ef99'
  },
  logo: {
    // margin: '3px 23px 6px 1.9vw',
    // fontSize: 2.5 + 'rem',
    // textAlign: 'center',
    color: '#8b008b'
  },
  userHeader: {
    marginRight: 1.8 + 'vw',
    justifyContent: 'flex-end'
  },
  hello: {
    alignItems: 'center',
    color: 'darkslategrey',
    fontSize: 1.7 + 'rem',
    margin: '3px 7px 3px 0'
  },
  patch: {
    alignItems: 'flex-end'
  },
  coverage: {
    width: 8 + 'px',
    height: 10 + 'px',
    backgroundColor: '#fdf7f4',
    position: 'absolute'
  },
  cart: {
    marginTop: 7.5 + 'px',
    // &::after {
    //     fontFamily: 'fa-solid';
    //     content: "\f07a";
    //     color: '#8b008b';
    //     font-size: 235+'%;'
    // }
  },
  quantityProducts: {
    borderRadius: 50,
    backgroundColor: '#d5bec2',
    color: 'darkslategrey',
    height: 26 + 'px',
    width: 26 + 'px',
    textAlign: 'center',
    marginRight: 0.2 + 'vw'
  },
  noProducts: {
    borderRadius: 50,
    color: 'darkslategrey',
    height: 26 + 'px',
    width: 22 + 'px',
    textAlign: 'center',
    marginRight: 0.2 + 'vw'
  },
  userMenu: {
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 40,
    width: 'max-content'
  },
  userMenuImg: {
    width: 57 + 'px',
    height: 53 + 'px',
    borderRadius: 50,
    padding: 0,
    paddingLeft: 2 + 'px'

  }
});