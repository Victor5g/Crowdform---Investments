import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Ionicons, Feather, FontAwesome5 } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";

import Header from "../../components/header";

import style from "./style";

const chartConfig = (color: any) => {
  return {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 100) => color ?? `rgba(0, 0, 0,  100)`,
    barPercentage: 0.5,
  };
};

const mockBase = [
  [
    Math.random() * 100,
    Math.random() * 500,
    Math.random() * 90,
    Math.random() * 800,
    Math.random() * 100,
    Math.random() * 400,
    Math.random() * 700,
    Math.random() * 200,
    Math.random() * 400,
    Math.random() * 400,
    Math.random() * 900,
  ],
  [
    Math.random() * 100,
    Math.random() * 200,
    Math.random() * 90,
    Math.random() * 100,
    Math.random() * 20,
    Math.random() * 50,
    Math.random() * 90,
    Math.random() * 50,
    Math.random() * 10,
    Math.random() * 9,
    Math.random() * 8,
  ],
  [
    Math.random() * 9,
    Math.random() * 20,
    Math.random() * 40,
    Math.random() * 45,
    Math.random() * 57,
    Math.random() * 90,
    Math.random() * 170,
    Math.random() * 300,
    Math.random() * 840,
    Math.random() * 980,
    Math.random() * 1000,
  ],
];

const data = {
  labels: ["", "", "", "", "", ""],
};

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
          <View style={style.contentFunds}>
            <Text style={style.labelContent}>Funds</Text>
            <ScrollView
              style={style.scrollFunds}
              contentContainerStyle={style.containerStyleScroll}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity style={style.fundCard}>
                <Feather name="wind" size={24} color="#4A88D0" />
                <Text style={style.labelCard}>Wind Fund</Text>
                <LineChart
                  style={{ marginLeft: -55 }}
                  data={{ ...data, datasets: [{ data: [...mockBase[0]] }] }}
                  width={176}
                  height={80}
                  chartConfig={chartConfig("rgba(15, 223, 143,  100)")}
                  withHorizontalLabels={false}
                  withHorizontalLines={false}
                  withVerticalLabels={false}
                  withInnerLines={false}
                  withOuterLines={false}
                  withDots={false}
                  withShadow={false}
                />
                <View style={style.contentValueCard}>
                  <Text style={style.valueLabelFund}>{"$" + "1047.53"}</Text>
                  <View style={style.ContentProfitability}>
                    <Feather name="arrow-up-right" size={18} color="#0FDF8F" />
                    <Text style={style.profitabilityCard}>{"3.82%"}</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={style.fundCard}>
                <Feather name="sun" size={24} color="#F0A719" />
                <Text style={style.labelCard}>Sun Fund</Text>
                <LineChart
                  style={{ marginLeft: -55 }}
                  data={{ ...data, datasets: [{ data: [...mockBase[1]] }] }}
                  width={176}
                  height={80}
                  chartConfig={chartConfig("rgba(238, 134, 136, 1)")}
                  withHorizontalLabels={false}
                  withHorizontalLines={false}
                  withVerticalLabels={false}
                  withInnerLines={false}
                  withOuterLines={false}
                  withDots={false}
                  withShadow={false}
                />
                <View style={style.contentValueCard}>
                  <Text style={style.valueLabelFund}>{"$" + "987.19"}</Text>
                  <View style={style.ContentProfitability}>
                    <Feather
                      name="arrow-down-right"
                      size={18}
                      color="#EE8688"
                    />
                    <Text
                      style={{ ...style.profitabilityCard, color: "#EE8688" }}
                    >
                      {"0.70%"}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={style.fundCard}>
                <Ionicons name="md-leaf-outline" size={24} color="#0FDF8F" />
                <Text style={style.labelCard}>Nature Fund</Text>
                <LineChart
                  style={{ marginLeft: -55 }}
                  data={{ ...data, datasets: [{ data: [...mockBase[2]] }] }}
                  width={176}
                  height={80}
                  chartConfig={chartConfig("rgba(15, 223, 143,  100)")}
                  withHorizontalLabels={false}
                  withHorizontalLines={false}
                  withVerticalLabels={false}
                  withInnerLines={false}
                  withOuterLines={false}
                  withDots={false}
                  withShadow={false}
                />
                <View style={style.contentValueCard}>
                  <Text style={style.valueLabelFund}>{"$" + "1657.89"}</Text>
                  <View style={style.ContentProfitability}>
                    <Feather name="arrow-up-right" size={18} color="#0FDF8F" />
                    <Text style={style.profitabilityCard}>{"10.32%"}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
