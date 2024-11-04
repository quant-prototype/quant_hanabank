import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from "expo-font";
import * as Linking from 'expo-linking';
import MyDataScreen from './Screens/MyDataScreen';
import DetailedTransactionBreakdownScreen from './Screens/DetailedTransactionBreakdownScreen';
import Pay from './Screens/Pay';
import DetailedCategoryBreakdown from './Screens/DetailedCategoryBreakdown';

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
  const [fontsLoaded] = useFonts({
    'Pretendard-300': require('./assets/fonts/Pretendard-Light.otf'),
    'Pretendard-400': require('./assets/fonts/Pretendard-Regular.otf'),
    'Pretendard-500': require('./assets/fonts/Pretendard-Medium.otf'),
    'Pretendard-600': require('./assets/fonts/Pretendard-SemiBold.otf'),
    'Pretendard-700': require('./assets/fonts/Pretendard-Bold.otf'),
  })
  
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer linking={linking}>
        <Stack.Navigator 
          initialRouteName='MyData'
          screenOptions={{ headerShown: false }}
          >
          <Stack.Screen name="MyData" component={MyDataScreen} />
          <Stack.Screen name="DetailedTransactionBreakdown" component={DetailedTransactionBreakdownScreen} />
          <Stack.Screen name="DetailedCategoryBreakdown" component={DetailedCategoryBreakdown} />
          <Stack.Screen name="Pay" component={Pay}  />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}