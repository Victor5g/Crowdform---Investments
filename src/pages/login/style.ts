import { StyleSheet, StatusBar } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight ?? 0,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  title: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 25,
    lineHeight: 23,
    color: "#000000",
    marginTop: 29,
  },

  form: {
    width: "100%",
    marginTop: 60,
    paddingHorizontal: 23,
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 14,
  },

  contentInput: {
    width: "auto",
    height: "auto",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  label: {
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "500",
    color: "#A0A0A0",
    paddingBottom: 7,
  },

  register: {
    color: "#A0A0A0",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 15,
    marginTop: 16,
  },

  signUp: {
    textDecorationLine: "underline",
  },
});

export default style;
