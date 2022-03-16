import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, setError } from "../store/userStore/userAction";
import { NavLink } from "react-router-dom";
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

export default function LoginPage() {
  const history = useHistory();
  const [fields, setFields] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  // const userNameRef = useRef();
  // const userPasswordRef = useRef();
  const { systemMsg } = useSelector((state: any) => state.userModule);
  const { loggedinUser } = useSelector((state: any) => state.userModule);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    dispatch(setError());
    // userNameRef.current.focus();
    if (loggedinUser) history.push("/");
  }, [loggedinUser]);

  const login = (ev: any) => {
    ev.preventDefault();
    dispatch(setError());
    if (username && password) {
      setErrorMsg("");
      dispatch(loginUser({ username, password }));
    } else {
      setErrorMsg("A username and password must be entered");
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
        <TouchableOpacity style={[styles.formBtn]} onPress={login}>
          <Text>Login!</Text>
        </TouchableOpacity>
        {systemMsg && <View style={[styles.errorMsg]}>{systemMsg}</View>}
        {errorMsg && <View style={[styles.errorMsg]}>{errorMsg}</View>}
        <NavLink
          to="/signup"
          activeClassName="active-nav"
          className="signup-btn"
        >
          Signup
        </NavLink>
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
    cursor: 'pointer',
    padding: 10 + 'px',
    backgroundColor: ' #8a9dee',
    color: 'white',
    border: 'none',
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