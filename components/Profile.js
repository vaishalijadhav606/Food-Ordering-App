import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';

export class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/bg-profile.jpg')} style={styles.image} />
                <Image source={require('../assets/profile_user.jpg')} style={styles.profile}></Image>
                <View style={styles.details}>
                    <Text style={styles.name}>Marcus Doe</Text>
                    <Text style={styles.location}>Mumbai</Text>
                    <Text style={styles.myorder} onPress={() => Actions.cart()}>My Orders</Text>
                    <Text style={styles.logout} onPress={() => Actions.login()}>Logout</Text>
                </View>
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
        resizeMode: "cover",
        height: 200,
        justifyContent: "center"
    },
    profile: {
        marginLeft: 'auto',
        marginRight: 'auto',
        bottom: 0,
        top: -50,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#FFFFFF',
        borderWidth: 3,
        padding: 10,
    },
    details: {
        alignItems: 'center',
        marginTop: -30
    },
    name: {
        color: '#335678',
        fontSize: 20,
        fontWeight: '700'
    },
    location: {
        color: '#335678',
        fontSize: 16,
        opacity: .5,
        marginVertical: 10
    },
    myorder: {
        backgroundColor: 'green',
        borderRadius: 10,
        color: '#ffffff',
        padding: 10
    },
    logout: {
        color: 'red',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 30
    }
});

export default Profile
