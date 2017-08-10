import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
    headerTitle: (
       <Text>Profile Screen</Text>
    )
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatStack', {name: 'Lucy'})}> 
          <Text> Go to chat </Text>
        </TouchableOpacity>
      </View>
    );
  }
}