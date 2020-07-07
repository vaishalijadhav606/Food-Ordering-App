import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        img: 'https://res.cloudinary.com/sivadass/image/upload/v1535181121/dummy-products/restaurants/adayar-anandha-bhavan.jpg',
        name: 'Dish1',
        type: 'Indian',
        price: 200
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
        img: 'https://res.cloudinary.com/sivadass/image/upload/v1535181121/dummy-products/restaurants/anjappar.jpg',
        name: 'Dish2',
        type: 'Quick Bites',
        price: 600
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
        img: 'https://res.cloudinary.com/sivadass/image/upload/v1535181119/dummy-products/restaurants/buhari.jpg',
        name: 'Dish3',
        type: 'Indian',
        price: 500
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
        img: 'https://res.cloudinary.com/sivadass/image/upload/v1535181121/dummy-products/restaurants/gupta-bhavan.jpg',
        name: 'Dish4',
        type: 'Indian',
        price: 500
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
        img: 'http://res.cloudinary.com/sivadass/image/upload/v1535181126/dummy-products/restaurants/hot-chips.jpg',
        name: 'Dish5',
        type: 'Indian',
        price: 800
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
        img: 'https://res.cloudinary.com/sivadass/image/upload/v1535181121/dummy-products/restaurants/paradise.jpg',
        name: 'Dish6',
        type: 'Indian',
        price: 500
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bg',
        img: 'https://res.cloudinary.com/sivadass/image/upload/v1535181121/dummy-products/restaurants/saravana-bhavan.jpg',
        name: 'Dish7',
        type: 'Indian',
        price: 800
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bfh',
        img: 'https://res.cloudinary.com/sivadass/image/upload/v1535181121/dummy-products/restaurants/paradise.jpg',
        name: 'Dish8',
        type: 'Indian',
        price: 500
    }
];

export class RestaurantDetails extends Component {

    constructor() {
        super();
        this.state = {
            status: true,
            clicks: 0,
        }
    }

    showHideAddBtn = () => {
        if (this.state.status == true) {
            this.setState(
                {
                    status: false,
                    clicks: this.state.clicks + 1
                }
            )
        } else {
            this.setState(
                {
                    status: true,
                    clicks: this.state.clicks + 1
                }
            )
        }
    }

    IncrementItem = () => {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }

    DecrementItem = () => {
        this.setState({
            clicks: this.state.clicks - 1
        })
    }

    onPressNext(){
        Actions.cart({data : "Hello World"});
    }


    render() {
        let btnAdd;
        if (this.state.clicks == 0) {
            this.state.status = true
        }
        if (this.state.status && this.state.clicks == 0) {
            btnAdd = <TouchableOpacity
                style={styles.button}
                onPress={this.showHideAddBtn}

            >
                <Text style={styles.white}>ADD</Text>
            </TouchableOpacity>
        } else {
            btnAdd = <View style={styles.button, styles.counterBtn}>
                <TouchableOpacity onPress={this.DecrementItem}><Text style={styles.counterDecBtn}>-</Text></TouchableOpacity>
                <Text style={styles.count}>{this.state.clicks}</Text>
                <TouchableOpacity onPress={this.IncrementItem}><Text style={styles.counterIncBtn}>+</Text></TouchableOpacity>
            </View>
        }

        let cartContainer;
        if (this.state.clicks != 0) {
            cartContainer = <View style={styles.cartDetails}>
                <Text style={styles.cartText}>{this.state.clicks} Item  |  &#8377;200</Text>
                <View style={styles.detailsbtn}>
                    <Text style={styles.cartText} onPress={this.onPressNext.bind(this)}>View Cart</Text>
                    <Image source={require('../assets/cart-bag.png')} style={{ width: 25, height: 25, marginLeft: 10 }}></Image>
                </View>
            </View>
        }


        return (
            <View style={styles.container}>
                <Text>Rest1</Text>
                <Text>Indian, Chinese</Text>
                <Text>Chembur | 5.9 kms</Text>

                <View>
                    <Text>Bestsellers</Text>
                    <ScrollView>
                        <View style={styles.listdetails}>
                            <FlatList
                                data={DATA}
                                numColumns={2}
                                columnWrapperStyle={styles.column}
                                renderItem={({ item }) => (
                                    <View style={styles.itemDetails}>
                                        <Image source={{ uri: item.img }} style={styles.imgPre} />
                                        <Text style={styles.location}>{item.type}</Text>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <View style={styles.btnContainer}>
                                            <Text style={styles.prize}>&#8377; {item.price}</Text>
                                            {btnAdd}
                                        </View>
                                    </View>
                                )}
                                keyExtractor={(item, index) => index}
                            />
                        </View>
                    </ScrollView>
                </View>

                {cartContainer}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 10,
        position: 'relative'
    },
    listdetails: {
        marginVertical: 10,
        marginBottom: 120
    },
    itemDetails: {
        margin: 10,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    imgPre: {
        width: '100%',
        height: 120,
        marginRight: 10,
        borderRadius: 10
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#335678',
        marginVertical: 2
    },
    location: {
        color: '#335678',
        fontSize: 16,
        opacity: .5
    },
    prize: {
        fontSize: 16,
        color: '#335678'
    },
    button: {
        color: "#ffffff",
        borderColor: 'lightgrey',
        borderWidth: 2,
        textAlign: "center",
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 5,
        // width: 60,
        justifyContent: "flex-end",
        alignItems: 'flex-end'
    },
    btnContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    white: {
        textAlign: 'center',
        color: 'green',
        fontWeight: '700',
        fontSize: 15
    },
    count: {
        textAlign: 'center',
        color: 'green',
        fontWeight: '700',
        fontSize: 15,
        padding: 15
    },
    counterDecBtn: {
        fontSize: 25,
        color: 'gray',
        fontWeight: '800',
        paddingHorizontal: 2
    },
    counterIncBtn: {
        fontSize: 20,
        color: 'green',
        fontWeight: '800',
        paddingHorizontal: 2
    },
    counterBtn: {
        // flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: 'lightgrey',
        borderWidth: 2,
        textAlign: "center",
        paddingHorizontal: 5,
        borderRadius: 5,
        height: 35
    },
    cartDetails: {
        backgroundColor: 'lime',
        height: 50,
        position: 'absolute',
        bottom: 0,
        left: 0,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        right: 0,
        paddingHorizontal: 20,
    },
    cartText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    detailsbtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})

export default RestaurantDetails
