import React from "react";
import { Text, View } from "react-native";
import style from "./style";

const Message = props => {
  const { messageText, status } = props;

  return (
    <>
      {status === false && (
        <View style={style.msg}>
          <Text style={style.baseText}>{messageText}</Text>
        </View>
      )}
      {status === true && (
        <View style={{ ...style.msg, ...style.msg_me }}>
          <Text style={style.baseText}>{messageText}</Text>
        </View>
      )}
    </>
  );
};

export default Message;
