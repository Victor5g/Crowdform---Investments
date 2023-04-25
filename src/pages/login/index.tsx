import { SafeAreaView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/header";
import Input from "../../components/input";
import Button from "../../components/button";

import style from "./style";

const Login = () => {
  const { navigate } = useNavigation();

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
        <Button title={"Login"} onPress={() => navigate('HomeTab')} />
      </View>
      <Text style={style.register}>
        Don’t have an account?
        <Text style={style.signUp} onPress={() => navigate('SingUp')}>
          {" "}
          Sign up{" "}
        </Text>
        here
      </Text>
    </SafeAreaView>
  );
};

export default Login;
