import { StyleSheet } from 'react-native'

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
  
    msg_them: {
      alignSelf: "flex-end",
      backgroundColor: "#CABDFD",
      width: "48%",
      display: "flex",
      padding: 7,
      marginRight: "5%",
      borderRadius: 9,
      borderBottomEndRadius: 1
    },
    msg_me: {
      backgroundColor: "#9279FE",
      width: "48%",
      display: "flex",
      padding: 7,
      alignSelf: "flex-start",
      marginLeft: "5%",
      borderRadius: 9,
      borderBottomStartRadius: 1
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