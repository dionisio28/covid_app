import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Home/HomeScreen';
import RouteNames from './routes.contants';
import DetailScreen from '../Detail/DetailScreen';
const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName={RouteNames.HOME_SCREEN}>
        <Stack.Screen    options={{ title: 'Coronavirus Status' }} name={RouteNames.HOME_SCREEN}component={HomeScreen} />
        <Stack.Screen name={RouteNames.DETAIL_SCREEN}component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
