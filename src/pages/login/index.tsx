import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";

import Header from "../../components/header";
import Input from "../../components/input";
import Button from "../../components/button";

import style from "./style";

const Login = () => {
  return (
    <SafeAreaView style={style.container}>
      <Header />
      <Text style={style.title}>Login</Text>
      <View style={style.form}>
        <View style={style.contentInput}>
          <Text style={style.label}>E-mail</Text>
          <Input inputype={"text"} placeholder="email@example.com" />
        </View>
        <View>
          <Text style={style.label}>Password</Text>
          <Input inputype={"password"} placeholder="Minimum 8 characters" />
        </View>
        <Button
          title={"Login"}
          onPress={() => {
            console.log(" Screen -> Home");
          }}
        />
      </View>
      <Text style={style.register}>
        Don’t have an account?
        <Text
          style={style.signUp}
          onPress={() => {
            console.log("Send -> Screen Sing Up");
          }}
        >
          {" "}
          Sign up{" "}
        </Text>
        here
      </Text>
    </SafeAreaView>
  );
};

export default Login;
