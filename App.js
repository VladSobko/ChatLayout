import React from "react";
import { Text, View } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import Message from "./Message";
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
        <Message
          status={false}
          messageText="Tellus volutpat unfortunately. Is it possible to send me the
          documents? Thank you very much."
        ></Message>

        <Message
          status={true}
          messageText="No problem, Dustin. I send you the documents when I arrived at my
          office!"
        ></Message>

        <Message
          status={false}
          messageText="I have received your documents. Maybe we can try another color to the
          homepage? I am already working for a proposal.Also i saw that the
          wording has a lot of spelling mistakes. I correct everything that I
          see. I send you everything tommorrow."
        ></Message>

        <Text style={style.msg_readDate}>Read 12:45 ✓</Text>

        <Message
          status={true}
          messageText="Nice! Sorry for the spelling mistakes, the text was pretty old."
        ></Message>
      </View>
    );
  }
}
