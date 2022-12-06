import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {
  View,
  ActivityIndicator,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from '@my-bootstrap/bootstrapNavigation';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Dashboard, WeatherDetail, SearchPage} from '@my-module/weather/screen';
import MyIcon from '@my-component/MyIcon';

const Stack = createStackNavigator();

const fallbackStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Fallback() {
  return (
    <View style={[fallbackStyles.container]}>
      <ActivityIndicator size="large" />
    </View>
  );
}

function AppNavigator() {
  const routeNameRef = React.useRef<string>();
  return (
    <SafeAreaProvider>
      <NavigationContainer
        ref={navigationRef}
        onReady={() =>
          (routeNameRef.current =
            navigationRef.current?.getCurrentRoute()?.name)
        }
        fallback={<Fallback />}>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle: {
              backgroundColor: '#5DA7DB',
            },
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerLeftContainerStyle: {padding: 5},
            headerLeft: () => (
              <TouchableHighlight
                onPress={() => {
                  const popAction = StackActions.pop(1);
                  navigationRef?.current?.dispatch(popAction);
                }}>
                <MyIcon name="chevron-left" size={30} color="#fff" />
              </TouchableHighlight>
            ),
          }}>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="WeatherDetail"
            component={WeatherDetail}
            options={{title: ' '}}
          />
          <Stack.Screen
            name="SearchPage"
            component={SearchPage}
            options={{title: ' '}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppNavigator;
