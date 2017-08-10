import React from "react";
import { View, StyleSheet,Image } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import NewsFeedScreen from "./screens/NewsFeedScreen";
import ProfileScreen from "./screens/ProfileScreen";
import DetailScreen from "./screens/DetailScreen";
import ChatScreen from "./screens/ChatScreen";

const NewsFeedStack = StackNavigator({
  NewsFeedStack: {
    screen: NewsFeedScreen
  },
  DetailStack: {
    screen: DetailScreen
  }
});

const ProfileStack = StackNavigator({
  ProfileStack: {
    screen: ProfileScreen
  },
  ChatStack: {
    screen: ChatScreen
  }
});

export const Tabs = TabNavigator(
  {
      ProfileStack: {
         screen: ProfileStack,
         navigationOptions: {
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
            tabBarIcon: ({ tintColor }) => (
               <Image
               source={require('../assets/icons/user_active.png')}
               style={[styles.icon, {tintColor: tintColor}]}
               />
            )
         }
      },
      NewsFeedStack: {
         screen: NewsFeedStack,
         navigationOptions: {
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
            tabBarIcon: ({ tintColor }) => (
               <Image
               source={require('../assets/icons/home_active.png')}
               style={[styles.icon, {tintColor: tintColor}]}
               />
            )
         }
      }
  },
  {
      tabBarOptions: {
         activeTintColor: "#e74c3c",
         inactiveTintColor: "#f1c40f",
         showLabel: false,
         style: {
            backgroundColor: '#3498db',
         }
      },
      swipeEnabled: true
   }
);


const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});