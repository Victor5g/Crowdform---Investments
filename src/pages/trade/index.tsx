import { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from "react-native";
import { AntDesign, Feather, Foundation } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";

import { Screen, FundObject } from "./types";

import Header from "../../components/header";
import Loading from "../../components/loading";

import style from "./style";

import { detailsFunds } from "../../constants/dummy";

import { FundInfo } from "../../services/funds";

const chartConfig = (color: any) => {
  return {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 100) => color ?? `rgba(0, 0, 0,  100)`,
    barPercentage: 0.5,
  };
};

const Trade = ({ navigation, route }: Screen) => {
  const [fund, setFund] = useState<FundObject>();
  const [isLoading, setLoading] = useState(true);

  const loadInfo = async (fundName: string) => {
    setLoading(true);
    let info = await FundInfo(fundName);
    setFund(info);
    setLoading(false);
  };

  useEffect(() => {
    route.params?.fund && loadInfo(route.params?.fund);
  }, [route.params?.fund]);

  return (
    <SafeAreaView style={style.container}>
      <ScrollView
        style={style.containerScroll}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Header>
          <View style={style.fundInformation}>
            <TouchableOpacity
              style={style.iconBack}
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={28} color="black" />
            </TouchableOpacity>

            <View style={style.contentLabels}>
              <Loading loading={isLoading}>
                <Text style={style.labelFund}>{fund?.name}</Text>
                <Text style={style.codeFund}>{fund?.key_fund}</Text>
              </Loading>
            </View>
            <View style={{ width: 40 }} />
          </View>
        </Header>

        <View style={style.contentDetail}>
          <Loading loading={isLoading}>
            <View style={style.boxValue}>
              <Text
                style={style.valueFund}
              >{`${fund?.money}${fund?.price}`}</Text>
              <View style={style.ContentProfitability}>
                <Feather
                  name={`arrow-${fund?.profitability || "up"}-right`}
                  size={18}
                  color={fund?.profitability === "up" ? "#0FDF8F" : "#EE8688"}
                />
                <Text
                  style={{
                    ...style.valueProfitability,
                    color: fund?.profitability === "up" ? "#0FDF8F" : "#EE8688",
                  }}
                >{`${fund?.rentability}% (${fund?.money}${fund?.rentabilityMoney})`}</Text>
              </View>
            </View>
            <Text style={style.valueFund}>{fund?.year}</Text>
          </Loading>
        </View>
        <View>
          <Loading loading={isLoading}>
            <LineChart
              style={{ marginLeft: -59 }}
              data={detailsFunds["Wind Fund"]}
              width={Dimensions.get("screen").width + 95}
              height={Dimensions.get("screen").height / 4}
              chartConfig={chartConfig(
                fund?.profitability === "up"
                  ? "rgba(15, 223, 143,  100)"
                  : "rgba(238, 134, 136, 1)"
              )}
              withHorizontalLabels={false}
              withHorizontalLines={false}
              withVerticalLabels={false}
              withInnerLines={false}
              withOuterLines={false}
              withDots={true}
              withShadow={false}
            />

            <View style={style.chartOptions}>
              <TouchableOpacity style={style.periodButton}>
                <Text style={style.labelPeriod}>1h</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ ...style.periodButton, ...style.selectedPeriod }}
              >
                <Text style={{ ...style.labelPeriod, ...style.selectedPeriod }}>
                  1d
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={style.periodButton}>
                <Text style={style.labelPeriod}>1w</Text>
              </TouchableOpacity>

              <TouchableOpacity style={style.periodButton}>
                <Text style={style.labelPeriod}>1m</Text>
              </TouchableOpacity>

              <TouchableOpacity style={style.periodButton}>
                <Text style={style.labelPeriod}>1y</Text>
              </TouchableOpacity>

              <TouchableOpacity style={style.periodButton}>
                <Text style={style.labelPeriod}>All</Text>
              </TouchableOpacity>
            </View>
          </Loading>
        </View>

        <View style={style.contentInfo}>
          <Text style={style.labelInfo}>Info & Stats</Text>

          <View style={style.infoDetails}>
            <View style={style.leftInfo}>
              <Loading loading={isLoading}>
                <View style={style.info}>
                  <View style={style.contentLabel}>
                    <Text style={style.infoLabel}>AUM</Text>
                    <Feather name="alert-circle" size={22} color="#A0A0A0" />
                  </View>
                  <Text
                    style={style.valueInfo}
                  >{`${fund?.money}${fund?.aum}m`}</Text>
                </View>

                <View style={style.info}>
                  <View style={style.contentLabel}>
                    <Text style={style.infoLabel}>Vintage Range</Text>
                    <Feather name="alert-circle" size={22} color="#A0A0A0" />
                  </View>
                  <Text
                    style={style.valueInfo}
                  >{`${fund?.vintageRange.start} - ${fund?.vintageRange.end}`}</Text>
                </View>

                <View style={style.info}>
                  <View style={style.contentLabel}>
                    <Text style={style.infoLabel}>Price at Close</Text>
                    <Feather name="alert-circle" size={22} color="#A0A0A0" />
                  </View>
                  <Text
                    style={style.valueInfo}
                  >{`${fund?.money}${fund?.priceClose}`}</Text>
                </View>
              </Loading>
            </View>

            <View style={style.rightInfo}>
              <Loading loading={isLoading}>
                <View style={style.info}>
                  <View style={style.contentLabel}>
                    <Text style={style.infoLabel}>Issue Date</Text>
                    <Feather name="alert-circle" size={22} color="#A0A0A0" />
                  </View>
                  <Text style={style.valueInfo}>{`${fund?.issueDate}`}</Text>
                </View>

                <View style={style.info}>
                  <View style={style.contentLabel}>
                    <Text style={style.infoLabel}>TER</Text>
                    <Feather name="alert-circle" size={22} color="#A0A0A0" />
                  </View>
                  <Text style={style.valueInfo}>{`${fund?.ter}%`}</Text>
                </View>

                <View style={style.info}>
                  <View style={style.contentLabel}>
                    <Text style={style.infoLabel}>Price at Open</Text>
                    <Feather name="alert-circle" size={22} color="#A0A0A0" />
                  </View>
                  <Text
                    style={style.valueInfo}
                  >{`${fund?.money}${fund?.priceOpen}`}</Text>
                </View>
              </Loading>
            </View>
          </View>
        </View>

        <View style={style.userPortifolio}>
          <View style={style.contentTitle}>
            <Foundation name="graph-pie" size={35} color={"#000"} />
            <Text style={style.labelTitle}>Your Portfolio</Text>
          </View>

          <View style={style.contentPortifolio}>
            <Loading loading={isLoading}>
              <View style={style.boxValue}>
                <Text style={style.valueFund}>{`${fund?.credit} Credits`}</Text>
                <View style={style.ContentProfitability}>
                  <Feather
                    name={`arrow-${fund?.profitabilityCredit || "up"}-right`}
                    size={18}
                    color={
                      fund?.profitabilityCredit === "up" ? "#0FDF8F" : "#EE8688"
                    }
                  />
                  <Text
                    style={{
                      ...style.valueProfitability,
                      color:
                        fund?.profitabilityCredit === "up"
                          ? "#0FDF8F"
                          : "#EE8688",
                    }}
                  >{`${fund?.rentabilityCredit}%`}</Text>
                </View>
              </View>

              <View style={style.boxValueFund}>
                <Text
                  style={style.valueFund}
                >{`${fund?.money}${fund?.currrentValue}`}</Text>
                <Text
                  style={style.purchaseFund}
                >{`Last purchase ${fund?.lastPurchase} ago`}</Text>
              </View>
            </Loading>
          </View>

          <View style={style.contentButtons}>
            <TouchableOpacity style={style.buttonSell} disabled={isLoading}>
              <Loading loading={isLoading}>
                <Text style={style.labelSell}>Sell</Text>
              </Loading>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonRetire} disabled={isLoading}>
              <Loading loading={isLoading} invertColor>
                <Text style={style.labelRetire}>Retire credits</Text>
              </Loading>
            </TouchableOpacity>
          </View>

          <View style={style.contentFooter}>
            <Loading loading={isLoading}>
              <Text style={style.footerButton}>
                {`You’ve previously retired ${fund?.retired} credits of this asset`}
              </Text>
            </Loading>
          </View>

          <View style={style.contentInformation}>
            <Text style={style.labelInformation}>
              Please note that prices are for reference only and may vary at the
              time of excecuting a buy or sell order.
            </Text>
            <Text style={style.labelInformation}>
              The information provided is not investment advice, and should not
              be used as a recommendation to buy or sell assets.
            </Text>
          </View>

          <View style={style.contentButtonBuy}>
            <TouchableOpacity style={style.buttonBuy} disabled={isLoading}>
              <Loading loading={isLoading} invertColor>
                <Text style={style.labelBuy}>Buy</Text>
              </Loading>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Trade;
