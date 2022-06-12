import {
  ReactComponentElement,
  useState,
  useRef,
  ReactEventHandler,
  MutableRefObject,
  RefObject
} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Cart from './cart'
import Items from './items'

export default function Home() {
  const [view, setView] = useState('')
  const home: RefObject<Button> | null = useRef(null)
  const cart = useRef(null)

  function handleHomeButton(e: any): void {
    setView('home')
  }
  function handleCartButton(e: any): void {
    setView('cart')
  }
  return (
    <>
      <View>
        <Button
          onPress={handleHomeButton}
          title='Home'
          ref={home}
          accessibilityLabel='Home'
        />
        <Button
          onPress={handleCartButton}
          title='Cart'
          ref={cart}
          accessibilityLabel='Cart'
        />
      </View>
      <View
        style={
          view === 'home' || view === ''
            ? styles.container
            : { display: 'none' }
        }
      >
        <Text>Welcome to the Store</Text>
        <Items />
      </View>
      <View style={view === 'cart' ? styles.container : { display: 'none' }}>
        <Text>Welcome to the shopping cart</Text>
        <Cart />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
