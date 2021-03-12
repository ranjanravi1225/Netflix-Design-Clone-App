import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/components/Home';
import Item from './src/components/Item';
import { Colors } from './src/components/Colors';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Item' component={Item} />
        </Stack.Navigator>
        <StatusBar style='auto' backgroundColor={Colors.white} />
      </View>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
