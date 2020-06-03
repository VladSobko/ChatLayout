import React from "react";
import { Text, View } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import MessageThem from "./MessageThem";
import MessageMe from "./MessageMe";
import style from "./style";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Public-Sans": require("./assets/fonts/public-sans.ttf")
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={style.container}>
        <MessageThem
          style={style.msg_them}
          messageText="Tellus volutpat unfortunately. Is it possible to send me the
          documents? Thank you very much."
        ></MessageThem>

        <MessageMe
          style={style.msg_me}
          messageText="No problem, Dustin. I send you the documents when I arrived at my
          office!"
        ></MessageMe>

        <MessageThem
          style={style.msg_them}
          messageText="I have received your documents. Maybe we can try another color to the
          homepage? I am already working for a proposal.Also i saw that the
          wording has a lot of spelling mistakes. I correct everything that I
          see. I send you everything tommorrow."
        ></MessageThem>

        <Text style={style.msg_readDate}>Read 12:45 ✓</Text>

        <MessageMe
          style={style.msg_me}
          messageText="Nice! Sorry for the spelling mistakes, the text was pretty old."
        ></MessageMe>
      </View>
    );
  }
}
