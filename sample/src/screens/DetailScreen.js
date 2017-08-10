import React from "react";
import { Text, View } from "react-native";

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    title: `${item.name.first} ${item.name.last}`
  };
  render() {
      const {params} = this.props.navigation.state;
    return (
      <View>
        <Text>Detail {params.item.email} </Text>
      </View>
    );
  }
}