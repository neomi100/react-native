import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { signupUser } from "../store/userStore/userAction";
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

export default function SignupPage() {
  const [fields, setFields] = useState({ username: "", password: "" });
  // const history = useHistory();
  const dispatch = useDispatch();
  // const userNameRef = useRef();
  // const userPasswordRef = useRef();
  const [errorMsg, setErrorMsg] = useState("");

  // useEffect(() => {
  //   userNameRef.current.focus();
  // }, []);

  const signup = (ev: any) => {
    ev.preventDefault();
    // if (userNameRef.current.value && userPasswordRef.current.value) {
    if (username && password) {
      setErrorMsg("");
      dispatch(signupUser({ username, password }));
      // history.push("/");
    } else {
      setErrorMsg(
        "Complete the registration - a username and password must be entered"
      );
    }
  };

  const inputHandler = ({ target }: any) => {
    const field = target.name;
    const value = target.type === "number" ? +target.value : target.value;

    setFields((prevFields) => ({ ...prevFields, [field]: value }));
  };

  const { username, password } = fields;
  return (
    <View style={[styles.signupPage]}>
      <View>
        <View>
          Username:
          <TextInput
            // ref={userNameRef}
            value={username}
            // name="username"
            onChange={inputHandler}
            // type="text"
            placeholder="Username"
          // autoComplete="off"
          />
        </View>
        <View>
          Password:
          <TextInput
            // ref={userPasswordRef}
            value={password}
            // name="password"
            onChange={inputHandler}
            // type="password"
            placeholder="Password"
          />
        </View>
        <TouchableOpacity style={[styles.formBtn]} onPress={signup}>
          <Text>Sign Up!</Text>
        </TouchableOpacity>
        {errorMsg && <View style={[styles.errorMsg]}>{errorMsg}</View>}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  signupPage: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: '40 + px, 0'
  },
  formBtn: {
    padding: 10 + 'px',
    color: 'white',
    marginTop: 20 + 'px',
    borderRadius: 7
  },
  errorMsg: {
    padding: 10 + 'px',
    backgroundColor: 'rgb(233, 149, 149)',
    borderRadius: 7,
    textAlign: 'center'
  }
})