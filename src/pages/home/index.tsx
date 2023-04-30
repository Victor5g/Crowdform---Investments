import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Ionicons, Feather, FontAwesome5 } from "@expo/vector-icons";

import Header from "../../components/header";

import style from "./style";

const Home = () => {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView
        style={style.containerScroll}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Header>
          <View style={style.userInformation}>
            <TouchableOpacity style={style.iconHeader}>
              <AntDesign name="user" size={28} color="black" />
            </TouchableOpacity>

            <Text style={style.labelAccount}>Account:{"$" + "1,457.53"}</Text>

            <TouchableOpacity style={style.iconHeader}>
              <Ionicons name="notifications-outline" size={28} color="black" />
            </TouchableOpacity>
          </View>

          <View style={style.userPortifolio}>
            <Text style={style.labelPortifolio}>Portifolio</Text>

            <View style={style.contentPortifolio}>
              <View style={style.boxValue}>
                <Text style={style.valuePortifolio}>{"$" + "1,457.53"}</Text>
                <View style={style.ContentProfitability}>
                  <Feather name="arrow-up-right" size={18} color="#0FDF8F" />
                  <Text style={style.valueProfitability}>{"31.82%"}</Text>
                </View>
              </View>

              <TouchableOpacity style={style.contentRewards}>
                <FontAwesome5 name="coins" size={18} color="#770FDF" />
                <Text style={style.labelRewards}>Earn Rewards</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Header>

        <View style={style.bodyScreen}>
          <Text>corpo</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
