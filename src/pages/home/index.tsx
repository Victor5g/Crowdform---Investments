import { useEffect, useState } from "react";
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

import { Person, Funds, NewsItem } from "./types";

import Header from "../../components/header";

import style from "./style";

import { CostumerInfo, News } from "../../services/user";
import { CostummerFunds, DetailsFunds } from "../../services/funds";

const chartConfig = (color: any) => {
  return {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 100) => color ?? `rgba(0, 0, 0,  100)`,
    barPercentage: 0.5,
  };
};

const Home = () => {
  const [costummer, setCostumer] = useState<Person>();
  const [funds, setFunds] = useState<Funds>();
  const [news, setNews] = useState<NewsItem[]>();

  const infoCostummer = async () => {
    let info: any = await CostumerInfo();
    setCostumer(info);
  };

  const loadFunds = async () => {
    let fund = await CostummerFunds();
    let details = [];
    for (const index of fund) {
      let value = await DetailsFunds(index.name);
      details.push(value);
    }
    setFunds({ fund: [...fund], detail: [...details] });
  };

  const loadNews = async () => {
    let news_info = await News();
    setNews(news_info);
  };

  const loadScreen = async () => {
    await loadFunds();
    await infoCostummer();
    await loadNews();
  };

  useEffect(() => {
    loadScreen();
  }, []);

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

            <Text style={style.labelAccount}>
              {`Account: ${costummer?.portifolio?.symbol}${costummer?.portifolio?.value}`}
            </Text>

            <TouchableOpacity style={style.iconHeader}>
              <Ionicons name="notifications-outline" size={28} color="black" />
            </TouchableOpacity>
          </View>

          <View style={style.userPortifolio}>
            <Text style={style.labelPortifolio}>Portifolio</Text>

            <View style={style.contentPortifolio}>
              <View style={style.boxValue}>
                <Text
                  style={style.valuePortifolio}
                >{`${costummer?.portifolio?.symbol}${costummer?.portifolio?.value}`}</Text>
                <View style={style.ContentProfitability}>
                  <Feather
                    name={`arrow-${
                      costummer?.portifolio?.profitability || "up"
                    }-right`}
                    size={18}
                    color="#0FDF8F"
                  />
                  <Text
                    style={style.valueProfitability}
                  >{`${costummer?.portifolio?.rentability}%`}</Text>
                </View>
              </View>

              <TouchableOpacity style={style.contentRewards}>
                <FontAwesome5 name="coins" size={18} color="#FFFFFF" />
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
              {funds?.fund !== undefined &&
                funds.fund.map((value, index) => (
                  <TouchableOpacity key={index} style={style.fundCard}>
                    {value?.base === "Ionicons" && (
                      <Ionicons
                        name={value.icon}
                        size={24}
                        color={`#${value.color_theme}`}
                      />
                    )}
                    {value?.base === "Feather" && (
                      <Feather
                        name={value.icon}
                        size={24}
                        color={`#${value.color_theme}`}
                      />
                    )}
                    <Text style={style.labelCard}>{value?.name}</Text>
                    <LineChart
                      style={{ marginLeft: -55 }}
                      data={funds.detail[index]}
                      width={176}
                      height={80}
                      chartConfig={chartConfig(
                        value?.profitability === "up"
                          ? "rgba(15, 223, 143,  100)"
                          : "rgba(238, 134, 136, 1)"
                      )}
                      withHorizontalLabels={false}
                      withHorizontalLines={false}
                      withVerticalLabels={false}
                      withInnerLines={false}
                      withOuterLines={false}
                      withDots={false}
                      withShadow={false}
                    />
                    <View style={style.contentValueCard}>
                      <Text
                        style={style.valueLabelFund}
                      >{` ${costummer?.portifolio?.symbol} ${value?.current_value}`}</Text>
                      <View style={style.ContentProfitability}>
                        <Feather
                          name={`arrow-${value?.profitability || "up"}-right`}
                          size={18}
                          color={
                            value?.profitability === "up"
                              ? "#0FDF8F"
                              : "#EE8688"
                          }
                        />
                        <Text
                          style={{
                            ...style.profitabilityCard,
                            color:
                              value?.profitability === "up"
                                ? "#0FDF8F"
                                : "#EE8688",
                          }}
                        >{`${value?.rentability}%`}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
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
              {news !== undefined &&
                news.map((value, index) => (
                  <View key={index} style={style.NewsCard}>
                    <Image style={style.imgaeNews} source={value.banner} />
                    <View style={style.contentSourceNews}>
                      <MaterialIcons
                        name="trip-origin"
                        size={24}
                        color="black"
                      />
                      <Text style={style.labelSourceNews}>{value.owner}</Text>
                    </View>
                    <Text style={style.labelNewsCard}>{value.title}</Text>
                    <Text style={style.labelRead}>Read more</Text>
                  </View>
                ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
