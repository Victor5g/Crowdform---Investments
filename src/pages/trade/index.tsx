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

import Header from "../../components/header";
import Loading from "../../components/loading";

import style from "./style";

import { detailsFunds } from "../../constants/dummy";

const chartConfig = (color: any) => {
  return {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 100) => color ?? `rgba(0, 0, 0,  100)`,
    barPercentage: 0.5,
  };
};

const Trade = () => {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView
        style={style.containerScroll}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Header>
          <View style={style.fundInformation}>
            <TouchableOpacity style={style.iconBack}>
              <AntDesign name="arrowleft" size={28} color="black" />
            </TouchableOpacity>

            <View style={style.contentLabels}>
              <Loading loading={false}>
                <Text style={style.labelFund}>WindFund</Text>
                <Text style={style.codeFund}>WFND</Text>
              </Loading>
            </View>
            <View style={{ width: 40 }} />
          </View>
        </Header>

        <View style={style.contentDetail}>
          <View style={style.boxValue}>
            <Text style={style.valueFund}>{`$23.75`}</Text>
            <View style={style.ContentProfitability}>
              <Feather name={`arrow-up-right`} size={18} color="#0FDF8F" />
              <Text style={style.valueProfitability}>{`3.51% ($1.21)`}</Text>
            </View>
          </View>
          <Text style={style.valueFund}>{"2023"}</Text>
        </View>

        <LineChart
          style={{ marginLeft: -59 }}
          data={detailsFunds["Wind Fund"]}
          width={Dimensions.get("screen").width + 95}
          height={Dimensions.get("screen").height / 4}
          chartConfig={chartConfig(
            true ? "rgba(15, 223, 143,  100)" : "rgba(238, 134, 136, 1)"
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

        <View style={style.contentInfo}>
          <Text style={style.labelInfo}>Info & Stats</Text>

          <View style={style.infoDetails}>
            <View style={style.leftInfo}>
              <View style={style.info}>
                <View style={style.contentLabel}>
                  <Text style={style.infoLabel}>AUM</Text>
                  <Feather name="alert-circle" size={22} color="#A0A0A0" />
                </View>
                <Text style={style.valueInfo}>{"$430.88m"}</Text>
              </View>

              <View style={style.info}>
                <View style={style.contentLabel}>
                  <Text style={style.infoLabel}>Vintage Range</Text>
                  <Feather name="alert-circle" size={22} color="#A0A0A0" />
                </View>
                <Text style={style.valueInfo}>{"2012 – 2023"}</Text>
              </View>

              <View style={style.info}>
                <View style={style.contentLabel}>
                  <Text style={style.infoLabel}>Price at Close</Text>
                  <Feather name="alert-circle" size={22} color="#A0A0A0" />
                </View>
                <Text style={style.valueInfo}>{"$17.68"}</Text>
              </View>
            </View>

            <View style={style.rightInfo}>
              <View style={style.info}>
                <View style={style.contentLabel}>
                  <Text style={style.infoLabel}>Issue Date</Text>
                  <Feather name="alert-circle" size={22} color="#A0A0A0" />
                </View>
                <Text style={style.valueInfo}>{"18/04/2023"}</Text>
              </View>

              <View style={style.info}>
                <View style={style.contentLabel}>
                  <Text style={style.infoLabel}>TER</Text>
                  <Feather name="alert-circle" size={22} color="#A0A0A0" />
                </View>
                <Text style={style.valueInfo}>{"0.15%"}</Text>
              </View>

              <View style={style.info}>
                <View style={style.contentLabel}>
                  <Text style={style.infoLabel}>Price at Open</Text>
                  <Feather name="alert-circle" size={22} color="#A0A0A0" />
                </View>
                <Text style={style.valueInfo}>{"$17.74"}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={style.userPortifolio}>
          <View style={style.contentTitle}>
            <Foundation name="graph-pie" size={35} color={"#000"} />
            <Text style={style.labelTitle}>Your Portfolio</Text>
          </View>

          <View style={style.contentPortifolio}>
            <View style={style.boxValue}>
              <Text style={style.valueFund}>{`23`} Credits</Text>
              <View style={style.ContentProfitability}>
                <Feather name={`arrow-up-right`} size={18} color="#0FDF8F" />
                <Text style={style.valueProfitability}>{`8.41%`}</Text>
              </View>
            </View>

            <View style={style.boxValueFund}>
              <Text style={style.valueFund}>{`$328.14`}</Text>
              <Text style={style.purchaseFund}>Last purchase 28d ago</Text>
            </View>
          </View>
          <View style={style.contentButtons}>
            <TouchableOpacity style={style.buttonSell}>
              <Text style={style.labelSell}>Sell</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonRetire}>
              <Text style={style.labelRetire}>Retire credits</Text>
            </TouchableOpacity>
          </View>

          <Text style={style.footerButton}>
            You’ve previously retired 28 credits of this asset
          </Text>

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
            <TouchableOpacity style={style.buttonBuy}>
              <Text style={style.labelBuy}>Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Trade;
