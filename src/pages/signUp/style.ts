import { StyleSheet, StatusBar } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight ?? 0,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  buttonBack: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
  },

  contentHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  contentIllustration: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    flexDirection: "row",
  },

  element: {
    borderColor: "#F4F4F4",
    width: 65,
    borderRadius: 100,
    borderWidth: 4.5,
  },

  title: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 25,
    lineHeight: 23,
    color: "#000000",
    marginTop: 29,
  },

  scroll: {
    width: "100%",
    paddingBottom: 40,
  },

  contenTitle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  form: {
    width: "100%",
    marginTop: 45,
    paddingHorizontal: 23,
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 18,
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

  contentCheckBox: {
    width: "100%",
    flexDirection: "row",
    marginTop: 19,
    alignItems: "center",
    paddingHorizontal: 23,
    gap: 15,
  },

  terms: {
    flex: 1,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 15,
    fontSize: 15,
    color: "#A0A0A0",
  },

  bold: {
    color: "#000000",
  },

  contentButton: {
    width: "100%",
    paddingHorizontal: 23,
  },

  loginHere: {
    textAlign: "center",
    color: "#A0A0A0",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 15,
    marginTop: 20,
  },

  underline: {
    textDecorationLine: "underline",
  },
});

export default style;
