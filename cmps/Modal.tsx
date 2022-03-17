import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/userStore/userAction";
import { setCart } from "../store/cartStore/cartAction";
// import { useHistory } from "react-router-dom";
import { View, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';

interface ModalPros {
  toggleModal: () => void,
}

export default function Modal({ navigation }: any, { toggleModal }: ModalPros) {
  const { loggedinUser } = useSelector((state: any) => state.userModule);
  const dispatch = useDispatch();
  // const history = useHistory();

  const onLogout = async () => {
    // history.push("/");
    dispatch(setCart([]));
    dispatch(logout());
  };

  return (
    <View style={[styles.modal]}>
      <View style={[styles.container]}>
        <View >
          <Text style={styles.modalBtn}>Signup</Text>
          <Button
            title="Go to Signup"
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
        {!loggedinUser &&
          <View >
            <Text style={styles.modalBtn}>Login</Text>
            <Button
              title="Go to Login"
              onPress={() => navigation.navigate('Login')}
            />
          </View>}
        {loggedinUser && (
          <TouchableOpacity onPress={() => onLogout} style={[styles.modalBtn]}>
            <Text >Logout</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => toggleModal} style={[styles.close]}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  modal: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    top: 29 + '%',
    left: 83 + 'vw',
    color: 'rgb(27, 27, 27)',
    // border: '2 + px solid #fff',
    zIndex: 2,
    // backgroundColor: ' #d5bec2',
    width: 24 + 'vw',
    height: 34 + 'vh',
    // boxShadow: ' 0 0 2 + px 2+px rgb(138, 137, 137)',
    borderRadius: 11
  },
  container: {
    fontSize: 1.7,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBtn: {
    width: 82 + '%',
    padding: 6 + 'px',
    // backgroundColor: '#8a9dee',
    color: 'white',
    // border: 'none',
    marginTop: 7 + 'px',
    borderRadius: 7
  },
  close: {
    width: 40 + '%',
    marginBottom: 7 + 'px',
    padding: 6 + 'px',
    // backgroundColor: '#8a9dee',
    color: 'white',
    // border: 'none',
    marginTop: 7 + 'px',
    borderRadius: 7,
  }
});