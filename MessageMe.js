import React from "react";
import { Text, View } from "react-native";
import style from "./style";

const MessageMe = props => {
  const { messageText} = props;

  return (
    <View style={style.msg_me}>
      <Text style={style.baseText}>{messageText}</Text>
    </View>
  );
};

export default MessageMe;