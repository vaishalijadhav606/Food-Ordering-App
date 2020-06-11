import React, { Component } from 'react';
import { View, StyleSheet, Image, FlatList, Text, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        img: 'https://res.cloudinary.com/sivadass/image/upload/v1535181121/dummy-products/restaurants/adayar-anandha-bhavan.jpg',
        name: 'Dish1',
        location: 'Mumbai',
        price: 200
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
        img: 'https://res.cloudinary.com/sivadass/image/upload/v1535181121/dummy-products/restaurants/anjappar.jpg',
        name: 'Dish2',
        location: 'New Mumbai',
        price: 600
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
        img: 'https://res.cloudinary.com/sivadass/image/upload/v1535181119/dummy-products/restaurants/buhari.jpg',
        name: 'Dish3',
        location: 'Mumbai',
        price: 500
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
        img: 'https://res.cloudinary.com/sivadass/image/upload/v1535181121/dummy-products/restaurants/gupta-bhavan.jpg',
        name: 'Dish4',
        location: 'Mumbai',
        price: 500
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
        img: 'http://res.cloudinary.com/sivadass/image/upload/v1535181126/dummy-products/restaurants/hot-chips.jpg',
        name: 'Dish5',
        location: 'Matunga',
        price: 800
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
        img: 'https://res.cloudinary.com/sivadass/image/upload/v1535181121/dummy-products/restaurants/paradise.jpg',
        name: 'Dish6',
        location: 'Worli',
        price: 500
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bg',
        img: 'https://res.cloudinary.com/sivadass/image/upload/v1535181121/dummy-products/restaurants/saravana-bhavan.jpg',
        name: 'Dish7',
        location: 'Mumbai',
        price: 800
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bfh',
        img: 'https://res.cloudinary.com/sivadass/image/upload/v1535181121/dummy-products/restaurants/paradise.jpg',
        name: 'Dish8',
        location: 'Mumbai',
        price: 500
    }
];

export class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 200 }} >
                    <Swiper style={styles.wrapper}>
                        <Image source={require('../assets/slide-1.jpg')} style={styles.image} />
                        <Image source={require('../assets/slide-2.jpg')} style={styles.image} />
                        <Image source={require('../assets/slide-3.jpg')} style={styles.image} />
                    </Swiper>
                </View>
                <ScrollView>
                    <View style={styles.listdetails}>
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) => (
                                <View style={styles.itemDetails}>
                                    <Image source={{ uri: item.img }} style={styles.imgPre} />
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
        flex: 1,
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
