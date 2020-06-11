import React, { Component } from 'react';
import { View, StyleSheet, Image, FlatList, Text, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        img: '../assets/1.jpg',
        name: 'Rest1',
        location: 'Mumbai',
        price: 200
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
        img: 'assets/2.jpg',
        name: 'Rest2',
        location: 'New Mumbai',
        price: 600
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
        img: 'assets/3.jpg',
        name: 'Rest3',
        location: 'Mumbai',
        price: 500
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
        img: 'assets/4.jpg',
        name: 'Rest4',
        location: 'Mumbai',
        price: 500
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
        img: 'assets/4.jpg',
        name: 'Rest5',
        location: 'Worli',
        price: 800
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
        img: 'assets/4.jpg',
        name: 'Rest6',
        location: 'Matunga',
        price: 500
    }
];

export class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 200 }} >
                    <Swiper style={styles.wrapper}>
                        <Image source = {require('../assets/slide-1.jpg')} style={styles.image} />
                        <Image source = {require('../assets/slide-2.jpg')} style={styles.image} />
                        <Image source = {require('../assets/slide-3.jpg')} style={styles.image} />
                    </Swiper>
                </View>
                <ScrollView>
                <View style={styles.listdetails}>
                    <FlatList 
                        data = {DATA}
                        renderItem={({item}) => (
                            <View style={styles.itemDetails}>
                                <Image source = {require('../assets/1.jpg')} style={styles.imgPre} />
                                <View>
                                    <Text style={styles.name} onPress={() => Actions.restaurantDetails()}>{item.name}</Text>
                                    <Text style={styles.location}>{item.location}</Text>
                                    <Text style={styles.prize}>&#8377; {item.price}</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => index}
                    />
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover'
    },
    wrapper: {
    },
    listdetails: {
        marginVertical: 20
    },
    itemDetails: {
        borderBottomWidth: 1, 
        borderColor: 'gray', 
        margin: 10, 
        paddingBottom: 10, 
        flex:1, 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    imgPre: {
        width: 80, 
        height: 80, 
        marginRight: 10, 
        alignSelf: 'center', 
        borderRadius: 10
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#335678'
    },
    location: {
        color: '#335678',
        fontSize: 16,
        opacity: .5,
        marginVertical: 3
    },
    prize: {
        fontSize: 16,
        color: '#335678'
    }
})

export default Home
