import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type TradeRouteParams = {
  fund: string;
};

type RootStackParamList = {
  Trade: TradeRouteParams;
};

type TradeNavigationProp = StackNavigationProp<RootStackParamList, "Trade">;

type TradeRouteProp = RouteProp<RootStackParamList, "Trade">;

export type Screen = { navigation: TradeNavigationProp; route: TradeRouteProp };

type PerformanceData = {
  datasets: Array<Object>;
  labels: string[];
};

type VintageRange = {
  end: number;
  start: number;
};

export type FundObject = {
  aum: number;
  issueDate: string;
  key_fund: string;
  money: string;
  name: string;
  performance: PerformanceData;
  price: number;
  priceClose: number;
  priceOpen: number;
  profitability: string;
  rentability: number;
  profitabilityCredit: string;
  rentabilityMoney: number;
  rentabilityCredit: number;
  retired: number;
  credit: number;
  ter: string;
  currrentValue: number;
  vintageRange: VintageRange;
  year: number;
  lastPurchase: string;
};
