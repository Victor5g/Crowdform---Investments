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
    //backgroundColor:'#F4F4F4',
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
    backgroundColor: "#F7EFFF",
    alignItems: "center",
    flexDirection: "row",
    gap: 9,
    borderRadius: 8,
  },

  labelRewards: {
    color: "#770FDF",
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
    paddingHorizontal: 20,
  },
});

export default style;
