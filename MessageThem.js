import React from "react";
import { Text, View } from "react-native";
import style from "./style";

const MessageThem = props => {
  const { messageText} = props;

  return (
    <View style={style.msg_them}>
      <Text style={style.baseText}>{messageText}</Text>
    </View>
  );
};

export default MessageThem;
