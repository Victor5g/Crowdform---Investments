import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  Feather,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
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
                  data={{
                    ...data,
                    datasets: [{ data: [...mockBase[2], ...mockBase[0]] }],
                  }}
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
                  data={{
                    ...data,
                    datasets: [{ data: [...mockBase[0], ...mockBase[2]] }],
                  }}
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

              <TouchableOpacity style={style.fundCard}>
                <Ionicons name="water-outline" size={24} color="#000000" />
                <Text style={style.labelCard}>Oil Fund</Text>
                <LineChart
                  style={{ marginLeft: -55 }}
                  data={{
                    ...data,
                    datasets: [{ data: [...mockBase[0], ...mockBase[1]] }],
                  }}
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
                  <Text style={style.valueLabelFund}>{"$" + "657.89"}</Text>
                  <View style={style.ContentProfitability}>
                    <Feather name="arrow-up-right" size={18} color="#EE8688" />
                    <Text
                      style={{ ...style.profitabilityCard, color: "#EE8688" }}
                    >
                      {"20.32%"}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>

            <TouchableOpacity style={style.contentLearn}>
              <View style={style.boxLearn}>
                <View style={style.contentLearnLabel}>
                  <Text style={style.labelLearn}>
                    Learn more about carbon credits
                  </Text>
                  <Text style={style.subLabelLearn}>
                    Check out our top tips!
                  </Text>
                </View>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require("../../assets/illustration/statistics.png")}
                />
              </View>
            </TouchableOpacity>

            <ScrollView
              style={style.scrollNews}
              contentContainerStyle={style.containerStyleScroll}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={style.NewsCard}>
                <Image
                  style={style.imgaeNews}
                  source={require("../../assets/images/AA1aB1ZK.jpeg")}
                />
                <View style={style.contentSourceNews}>
                  <MaterialIcons name="trip-origin" size={24} color="black" />
                  <Text style={style.labelSourceNews}>Barrrons</Text>
                </View>
                <Text style={style.labelNewsCard}>
                  Bitcoin Falls Below $29,000.
                </Text>
                <Text style={style.labelRead}>Read more</Text>
              </View>

              <View style={style.NewsCard}>
                <Image
                  style={style.imgaeNews}
                  source={require("../../assets/images/JHGHHTYU.png")}
                />
                <View style={style.contentSourceNews}>
                  <MaterialIcons name="trip-origin" size={24} color="black" />
                  <Text style={style.labelSourceNews}>The Montley</Text>
                </View>
                <Text style={style.labelNewsCard}>
                  Want Growing Dividend Income?
                </Text>
                <Text style={style.labelRead}>Read more</Text>
              </View>

              <View style={style.NewsCard}>
                <Image
                  style={style.imgaeNews}
                  source={require("../../assets/images/GHTYRUI.png")}
                />
                <View style={style.contentSourceNews}>
                  <MaterialIcons name="trip-origin" size={24} color="black" />
                  <Text style={style.labelSourceNews}>Reuters</Text>
                </View>
                <Text style={style.labelNewsCard}>
                  3 Stocks to Avoid This Week
                </Text>
                <Text style={style.labelRead}>Read more</Text>
              </View>

              <View style={style.NewsCard}>
                <Image
                  style={style.imgaeNews}
                  source={require("../../assets/images/LKJARTYU.png")}
                />
                <View style={style.contentSourceNews}>
                  <MaterialIcons name="trip-origin" size={24} color="black" />
                  <Text style={style.labelSourceNews}>MediaFeed</Text>
                </View>
                <Text style={style.labelNewsCard}>
                  Is It Time to Sell Netflix Stock?
                </Text>
                <Text style={style.labelRead}>Read more</Text>
              </View>

              <View style={style.NewsCard}>
                <Image
                  style={style.imgaeNews}
                  source={require("../../assets/images/YUIXVL.png")}
                />
                <View style={style.contentSourceNews}>
                  <MaterialIcons name="trip-origin" size={24} color="black" />
                  <Text style={style.labelSourceNews}>Barrrons</Text>
                </View>
                <Text style={style.labelNewsCard}>
                  Tesla Inc. stock rises Friday.
                </Text>
                <Text style={style.labelRead}>Read more</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
