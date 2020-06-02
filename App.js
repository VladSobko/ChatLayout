import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.msg_them}>
        <Text style={styles.baseText}>
          Is it possible to send me documents? Thank you very much
        </Text>
      </View>
      <View style={styles.msg_me}>
        <Text style={styles.baseText}>
          No problem, Dustin. I send you the documents when I arrived at my
          office!
        </Text>
      </View>
      <View style={styles.msg_them}>
        <Text style={styles.baseText}>
          I have received your documents. Maybe we can try another color to the
          homepage? I am already working for a proposal.Also i saw that the
          wording has a lot of spelling mistakes. I correct everything that I
          see. I send you everything tommorrow.
        </Text>
      </View>
      <Text style={styles.msg_readDate}>Read 12:45 ✓</Text>
      <View style={styles.msg_me}>
        <Text style={styles.baseText}>
          Nice! Sorry for the spelling mistakes, the text was pretty old
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontWeight: "bold"
  },

  msg_them: {
    alignSelf: "flex-end",
    backgroundColor: "#DDA0DD",
    width: "49%",
    display: "flex",
    padding: 7,
    marginRight: "5%",
    borderRadius: 9,
    borderBottomEndRadius: 1
  },
  msg_me: {
    backgroundColor: "#8A2BE2",
    width: "49%",
    display: "flex",
    padding: 7,
    alignSelf: "flex-start",
    marginLeft: "5%",
    borderRadius: 9,
    borderBottomStartRadius: 1
  },
  msg_readDate: {
    color: "darkslateblue",
    fontSize: 14,
    alignSelf: "flex-end",
    marginRight: "5%",
    marginVertical: "-8%"
  }
});
