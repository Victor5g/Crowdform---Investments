import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Header from "../../components/header";
import Input from "../../components/input";
import CheckBox from "../../components/checkBox";
import Button from "../../components/button";

import style from "./style";

const SingUp = () => {
  return (
    <SafeAreaView style={style.container}>
      <Header>
        <View style={style.contentHeader}>
          <TouchableOpacity
            style={style.buttonBack}
            onPress={() => {
              console.log("Send -> Screen Sing In");
            }}
          >
            <Ionicons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>
          <View style={style.contentIllustration}>
            <View style={style.element} />
            <View style={style.element} />
            <View style={style.element} />
          </View>
        </View>
      </Header>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 60 }}
        style={style.scroll}
      >
        <View style={style.contenTitle}>
          <Text style={style.title}>Create your account</Text>
        </View>

        <View style={style.form}>
          <View style={style.contentInput}>
            <Text style={style.label}>First Name</Text>
            <Input inputype={"text"} placeholder=" " />
          </View>

          <View style={style.contentInput}>
            <Text style={style.label}>Last Name</Text>
            <Input inputype={"text"} placeholder=" " />
          </View>

          <View style={style.contentInput}>
            <Text style={style.label}>Email</Text>
            <Input inputype={"text"} placeholder="email@example.com" />
          </View>

          <View style={style.contentInput}>
            <Text style={style.label}>Password</Text>
            <Input inputype={"password"} placeholder="Minimum 8 characters" />
          </View>
        </View>
        <View style={style.contentCheckBox}>
          <CheckBox
            changeState={(value) => {
              console.log("selected: ", value);
            }}
          />
          <Text style={style.terms}>
            I am over 18 years of age and I have read and agree to the{" "}
            <Text style={style.bold}>Terms of Service</Text> and{" "}
            <Text style={style.bold}>Privacy policy.</Text>
          </Text>
        </View>
        <View style={style.contentButton}>
          <Button
            title={"Create account"}
            onPress={() => {
              console.log("Create Account");
            }}
          />
        </View>
        <Text style={style.loginHere}>
          Already have an account?{" "}
          <Text
            style={[style.bold, style.underline]}
            onPress={() => {
              console.log("Send -> Screen Sing In");
            }}
          >
            Log in Here
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingUp;
