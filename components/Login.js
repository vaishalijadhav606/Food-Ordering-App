import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, StatusBar, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const userInfo = { email: 'admin', password: '12345' }

export class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="orange"/>
                <View style={styles.form}>
                    <TextInput 
                        placeholder="Enter  Email" 
                        style={styles.textInput} 
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        autoCapitalize="none"
                    />
                    <TextInput 
                        placeholder="Enter Password" 
                        secureTextEntry 
                        style={styles.textInput}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={this._login}
                    >
                        <Text style={styles.white}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.redirectLink}
                        onPress={() => Actions.signup()}
                    >Don't have account? Click here to Signup
                    </Text>    
                </View>
            </View>
        )
    }

    _login = async() => {
        if(userInfo.email === this.state.email && userInfo.password === this.state.password){
            // alert("Logged In");
            Actions.home();
        }else{
            alert("Username or Password is incorrect.");
        }
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
    form: {
        flex: 1,
        justifyContent: 'center',
        width: "100%",
        alignItems: "center"
    },
    textInput: {
        height: 40,
        borderColor: "gray",
        borderBottomWidth: 2,
        marginBottom: 20,
        width: 300
    },
    button: {
        color: "#ffffff",
        backgroundColor: "blue",
        textAlign: "center",
        padding: 10,
        borderRadius: 10,
        width: 200,
        justifyContent: "center"
   },
   white: {
       color: "#FFFFFF",
       textAlign: "center"
   },
   redirectLink: {
       fontSize: 15,
       fontWeight: 'bold',
       marginBottom: 20,
       color: 'blue'
   }
});  

export default Login
