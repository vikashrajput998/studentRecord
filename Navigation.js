import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import SignIn from './SignIn';
import Details from './Details';
import FormPage from './FormPage';
import ProfilePage from './ProfilePage';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="FormPage" component={FormPage}/>
        <Stack.Screen name="ProfilePage" component={ProfilePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
