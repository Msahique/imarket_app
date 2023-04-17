import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'top' }}>
      <Text>Home!</Text>
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
    </View>
  );
}

function CampaignScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>CampaignScreen</Text>
    </View>
  );
}

function SettlementScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settlement!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Campaign" component={CampaignScreen} />
        <Tab.Screen name="Settlement" component={SettlementScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


/*import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
  PermissionsAndroid,
  NativeModules,
  TouchableOpacity,
  Dimensions,
  Image,
  Platform,
  AppState,
} from 'react-native';

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useFocusEffect} from '@react-navigation/native';

// Import Screens
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        {/* SplashScreen which will come once for 5 Seconds *//*}
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



const styles = StyleSheet.create({});

export default App;
*/
