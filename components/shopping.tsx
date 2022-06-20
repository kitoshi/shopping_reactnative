import {
  useState,
  useRef,
  RefObject
} from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  GestureResponderEvent
} from 'react-native'
import Cart from './cart'
import Items, { InventoryItem } from './items'

export default function Shopping() {
  const [view, setView] = useState('')
  const [shoppingCart, setShoppingCart] = useState<InventoryItem[]>()
  const home: RefObject<Button> | null = useRef(null)
  const cart = useRef(null)

  function handleHomeButton(e: GestureResponderEvent): void {
    setView('home')
  }
  function handleCartButton(e: GestureResponderEvent): void {
    setView('cart')
  }
  return (
    <>
      <View style={styles.navbar}>
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
        <Text style={styles.icon_number}>{shoppingCart?.length}</Text>
      </View>
      <View
        style={
          view === 'home' || view === ''
            ? styles.container
            : { display: 'none' }
        }
      >
        <Text>Welcome to the Store</Text>
        <Items setShoppingCart={setShoppingCart} />
      </View>
      <View style={view === 'cart' ? styles.container : { display: 'none' }}>
        <Text>Welcome to the shopping cart</Text>
        <Cart shoppingCart={shoppingCart} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon_number: {
    color: 'red'
  },
  list: {
    flexDirection: 'row'
  }
})
