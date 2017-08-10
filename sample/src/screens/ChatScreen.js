import React from "react";
import { Text, View } from "react-native";

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat'
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy </Text>
      </View>
    );
  }
}