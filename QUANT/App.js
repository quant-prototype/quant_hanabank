import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from "expo-font";
import MyDataScreen from './Screens/MyDataScreen';
import DetailedTransactionBreakdownScreen from './Screens/DetailedTransactionBreakdownScreen';

const Stack = createNativeStackNavigator();

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
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MyData' component={MyDataScreen} options={{headerShown: false}}/>
          <Stack.Screen name='DetailedTransactionBreakdown' component={DetailedTransactionBreakdownScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
