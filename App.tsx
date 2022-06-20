import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import { AppRegistry } from 'react-native'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import {
  NavigationContainer,
  ParamListBase,
  StackRouter
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './components/shopping'
import Customer from './components/customer'
import Cart from './components/cart'
import { ReactNode } from 'react'
import Shopping from './components/shopping'

type RootParamList = {
  Home: undefined
  Cart: undefined
  Customer: undefined
  Shopping: undefined
}

const Stack = createNativeStackNavigator<RootParamList>()

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:10000/graphql',
  cache: new InMemoryCache()
})

export default function App() {
  // stack navigator type not importing
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Cart' component={Cart} />
          <Stack.Screen name='Customer' component={Customer} />
          <Stack.Screen name='Shopping' component={Shopping} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}

AppRegistry.registerComponent('MyApplication', () => App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
