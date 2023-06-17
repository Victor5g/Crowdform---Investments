import { ImageSourcePropType } from "react-native";

type Portfolio = {
  coin: string;
  profitability: string;
  rentability: number;
  symbol: string;
  value: string;
};

type Dataset = {
  datasets: number[];
  labels: string[];
};

type DetailItem = {
  datasets: Dataset[];
  labels: string[];
};

type FundItem = {
  base: string;
  color_theme: string;
  current_value: number;
  icon: string;
  id: number;
  name: string;
  profitability: string;
  rentability: number;
};

export type Person = {
  name: string;
  portifolio: Portfolio;
};

export type Funds = {
  detail: DetailItem[];
  fund: FundItem[];
};

export type NewsItem = {
  banner: ImageSourcePropType;
  owner: string;
  title: string;
};
