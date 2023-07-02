import { StyleSheet, StatusBar } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight ?? 0,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  containerScroll: {
    width: "100%",
    backgroundColor: "#FFFF",
  },

  fundInformation: {
    width: "97%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  iconBack: {
    justifyContent: "center",
    width: "auto",
    height: "auto",
  },

  contentLabels: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 4,
  },

  labelFund: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 22,
    fontStyle: "normal",
  },

  codeFund: {
    color: "#808080",
    fontWeight: "400",
    fontSize: 17,
    fontStyle: "normal",
  },

  contentDetail: {
    paddingHorizontal: 16,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  valueFund: {
    fontWeight: "700",
    color: "#000000",
    fontSize: 27,
  },

  boxValue: {
    flexDirection: "column",
  },

  ContentProfitability: {
    flexDirection: "row",
    gap: 3,
  },

  valueProfitability: {
    color: "#0FDF8F",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 18,
    fontSize: 16,
  },

  chartOptions: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // paddingHorizontal: 10,
  },

  periodButton: {
    backgroundColor: "#F4F4F4",
    padding: 9,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:5,
  },

  selectedPeriod: {
    backgroundColor: "#F7EFFF",
    color: "#770FDF",
  },

  labelPeriod: {
    color: "#A0A0A0",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "500",
  },

  contentInfo: {
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 35,
  },

  labelInfo: {
    fontWeight: "600",
    color: "#000000",
    fontSize: 20,
    fontStyle: "normal",
    lineHeight: 25,
  },

  infoDetails: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 15,
  },

  leftInfo: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 18,
  },

  rightInfo: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 18,
  },

  info: {
    flexDirection: "column",
    gap: 6,
  },

  contentLabel: {
    flexDirection: "row",
    gap: 4,
  },

  infoLabel: {
    color: "#A0A0A0",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
  },

  valueInfo: {
    color: "#000",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
  },

  userPortifolio: {
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 35,
  },

  contentTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },

  labelTitle: {
    color: "#000",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: -0.34,
  },

  contentPortifolio: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  boxValueFund: {
    flexDirection: "column",
    alignItems: "flex-end",
  },

  purchaseFund: {
    color: "#A0A0A0",
    textAlign: "right",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: -0.28,
  },

  contentButtons: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },

  buttonSell: {
    backgroundColor: "transparent",
    width: "48%",
    height: 60,
    maxWidth: 200,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#CFCFCF",
    borderWidth: 2,
    borderRadius: 10,
  },

  buttonRetire: {
    backgroundColor: "#000",
    width: "48%",
    height: 60,
    maxWidth: 200,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#CFCFCF",
    borderWidth: 2,
    borderRadius: 10,
  },

  labelSell: {
    color: "#000",
    textAlign: "center",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: -0.32,
  },

  labelRetire: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: -0.32,
  },

  footerButton: {
    color: "#A0A0A0",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: -0.22,
    marginTop: 16,
  },

  contentInformation: {
    width: "100%",
    backgroundColor: "#F4F4F4",
    padding: 10,
    marginTop: 30,
    gap: 7,
  },

  labelInformation: {
    color: "#A0A0A0",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: -0.24,
  },

  contentButtonBuy: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },

  buttonBuy: {
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    height: 70,
    maxWidth: 400,
    borderRadius: 10,
  },

  labelBuy: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: -0.32,
  },
});

export default style;
