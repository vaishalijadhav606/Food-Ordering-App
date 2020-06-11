import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class Cart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/empty-cart.png')} style={styles.emptyCart}></Image>
                <Text style={styles.heading}>Good food is always cooking</Text>
                <Text style={styles.description}>Your cart is empty</Text>
                <Text style={styles.description}>Add something from the menu</Text>
                <TouchableOpacity style={styles.redirectLink} onPress={() => Actions.home()}><Text style={styles.white}>Browse Restaurants</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      color: '#0000FF',
      alignItems: 'center',
      justifyContent: 'center',
    },
   white: {
       color: "orange",
       textAlign: "center",
       fontSize: 14,
       fontWeight: '700',
       textTransform: 'uppercase'
   },
   redirectLink: {
       fontSize: 15,
       fontWeight: 'bold',
       marginBottom: 20,
       color: 'orange',
       borderColor: 'orange',
       borderWidth: 1,
       marginTop: 20,
       padding: 10
   },
   heading: {
       textTransform: 'uppercase',
       fontWeight: '700',
       fontSize: 14,
       color:'#335678',
       marginVertical: 15
   },
   description: {
       fontSize: 13,
       fontWeight: '300',
       color: '#333678',
       opacity: .5
   },
   emptyCart: {
       width: 80,
       height: 80
   }
});  