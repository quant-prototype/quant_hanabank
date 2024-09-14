import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';

import MyDataScreen from './Screens/MyDataScreen';
import DetailedTransactionBreakdownScreen from './Screens/DetailedTransactionBreakdownScreen';
import Pay from './Screens/Pay';
import Main from './Screens/Main';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Pay: 'pay',
      MyData: 'mydata',
      DetailedTransactionBreakdown: 'detailedTransactionBreakdown',
    },
  },
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer linking={linking}>
        <Stack.Navigator 
          initialRouteName='Main'
          screenOptions={{ headerShown: false }}
          >
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="MyData" component={MyDataScreen} />
          <Stack.Screen name="DetailedTransactionBreakdown" component={DetailedTransactionBreakdownScreen} />
          <Stack.Screen name="Pay" component={Pay}  />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}