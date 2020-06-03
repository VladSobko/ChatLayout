import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    marginVertical: "15%"
  },

  baseText: {
    color: "white",
    fontFamily: "Public-Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12.8,
    lineHeight: 18
  },

  msg: {
    width: "48%",
    display: "flex",
    padding: 7,
    borderRadius: 9,
    borderBottomEndRadius: 1,

    alignSelf: "flex-end",
    backgroundColor: "#CABDFD",
    marginRight: "5%"
  },
  msg_me: {
    backgroundColor: "#9279FE",
    alignSelf: "flex-start",
    marginLeft: "5%",
    borderBottomEndRadius: 9,
    borderBottomStartRadius: 1,
  },
  msg_readDate: {
    color: "#99879D",
    alignSelf: "flex-end",
    marginRight: "5%",
    marginVertical: "-6%",
    fontFamily: "Public-Sans",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 12.8,
    lineHeight: 16
  }
});
