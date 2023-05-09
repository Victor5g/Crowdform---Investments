import { StyleSheet, StatusBar } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight ?? 0,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  userInformation: {
    width: "97%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  userPortifolio: {
    width: "97%",
    marginTop: 15,
    flexDirection: "column",
  },

  iconHeader: {
    padding: 8,
    width: "auto",
    height: "auto",
    borderRadius: 100,
  },

  labelAccount: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 18,
    fontStyle: "normal",
  },

  labelPortifolio: {
    color: "#000000",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },

  contentPortifolio: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  valuePortifolio: {
    fontWeight: "700",
    color: "#000000",
    fontSize: 27,
  },

  boxValue: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 3,
  },

  ContentProfitability: {
    flexDirection: "row",
    height: "100%",
    gap: 3,
  },

  valueProfitability: {
    color: "#0FDF8F",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 18,
    fontSize: 16,
  },

  contentRewards: {
    padding: 10,
    backgroundColor: "#000000",
    alignItems: "center",
    flexDirection: "row",
    gap: 9,
    borderRadius: 8,
  },

  labelRewards: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "600",
    fontStyle: "normal",
  },

  containerScroll: {
    width: "100%",
    backgroundColor: "#FFFF",
  },

  bodyScreen: {
    width: "100%",
    height: "auto",
  },

  contentFunds: {
    width: "100%",
    flexDirection: "column",
    marginTop: 20,
  },

  labelContent: {
    fontWeight: "600",
    color: "#000000",
    fontSize: 23,
    fontStyle: "normal",
    lineHeight: 25,
    marginHorizontal: 20,
  },

  containerStyleScroll: {
    gap: 10,
    paddingHorizontal: 20,
  },

  scrollFunds: {
    width: "100%",
    height: "auto",
    marginTop: 15,
  },

  fundCard: {
    width: 180,
    alignItems: "flex-start",
    height: 200,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#E6E6E6",
    padding: 10,
    gap: 5,
  },

  labelCard: {
    fontWeight: "600",
    color: "#000000",
    fontSize: 18,
    fontStyle: "normal",
    lineHeight: 25,
  },

  contentValueCard: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 7,
  },

  valueLabelFund: {
    fontWeight: "400",
    color: "#000000",
    fontSize: 18,
    fontStyle: "normal",
    lineHeight: 18,
  },

  profitabilityCard: {
    fontWeight: "400",
    color: "#0FDF8F",
    fontSize: 18,
    fontStyle: "normal",
    lineHeight: 18,
  },

  contentLearn: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 30,
  },

  boxLearn: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#000000",
    padding: 20,
    borderRadius: 10,
  },

  contentLearnLabel: {
    width: "55%",
    flexDirection: "column",
    justifyContent: "center",
    gap: 9,
  },

  labelLearn: {
    fontStyle: "normal",
    fontWeight: "600",
    color: "#FFFFFF",
    fontSize: 22,
    lineHeight: 20,
  },

  subLabelLearn: {
    fontStyle: "normal",
    fontWeight: "400",
    color: "#FFFFFF",
    fontSize: 18,
  },

  scrollNews: {
    width: "100%",
    height: "auto",
    marginTop: 15,
  },

  NewsCard: {
    width: 180,
    height: 260,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#E6E6E6",
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
  },

  labelNewsCard: {
    fontWeight: "600",
    color: "#000000",
    fontSize: 18,
    fontStyle: "normal",
    lineHeight: 25,
    padding: 10,
  },

  imgaeNews: {
    width: "100%",
    height: "40%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  labelRead: {
    fontWeight: "400",
    color: "#000000",
    fontSize: 16,
    fontStyle: "normal",
    marginLeft: 10,
    textDecorationLine: "underline",
  },

  contentSourceNews: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
    paddingLeft: 10,
  },

  labelSourceNews: {
    fontStyle: "normal",
    fontWeight: "400",
  },
});

export default style;
