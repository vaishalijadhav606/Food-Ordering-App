import React, { Component } from 'react'
import { View, Text , StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

export class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            name : '',
            nameError: '',
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            confirm_password: '',
            confirm_passwordError: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                <TextInput 
                        placeholder="Enter  Name" 
                        style={styles.textInput} 
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}
                        autoCapitalize="none"
                    />
                    <Text style={{color: 'red'}}>{this.state.nameError}</Text>
                    <TextInput 
                        placeholder="Enter  Email" 
                        style={styles.textInput} 
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        autoCapitalize="none"
                    />
                    <Text style={{color: 'red'}}>{this.state.emailError}</Text>
                    <TextInput 
                        placeholder="Enter Password" 
                        secureTextEntry 
                        style={styles.textInput}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        autoCapitalize="none"
                    />
                    <Text style={{color: 'red'}}>{this.state.passwordError}</Text>
                    <TextInput 
                        placeholder="Enter Confirm Password" 
                        secureTextEntry 
                        style={styles.textInput}
                        onChangeText={(confirm_password) => this.setState({confirm_password})}
                        value={this.state.confirm_password}
                        autoCapitalize="none"
                    />
                    <Text style={{color: 'red'}}>{this.state.confirm_passwordError}</Text>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => this.submit()}
                    >
                        <Text style={styles.white}>Signup</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.redirectLink}
                        onPress={() => Actions.login()}
                    >Already have account? Click here to Login
                    </Text>    
                </View>
            </View>
        )
    }

    // emailValidator(){
        
    // }

    
    submit(){
        let rjx = /^[a-zA-Z]+$/;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let isValid = rjx.test(this.state.name);
        if(!isValid){
            this.setState({nameError: "Name field must be alphabatic"})
        }else{
            this.setState({nameError: ""})
        }
        if(this.state.email == ""){
            this.setState({emailError: "Email field can not be empty"}); 
        }else if(!(reg.test(this.state.email))){
            this.setState({emailError: "Email field valid"});
        }else{
            this.setState({emailError: ""}) 
        }
        if(this.state.password == ""){
            this.setState({passwordError : "Password field can not be empty"});
        }else{
            this.setState({passwordError : ""});
        }
        if(this.state.confirm_password == ""){
            this.setState({confirm_passwordError : "Confirm password field can not be empty"});
        }else{
            this.setState({confirm_passwordError : ""});
        }
        if(this.state.password != this.state.confirm_password){
            this.setState({confirm_passwordError: "The passwords don't match"})
        }
        if(this.state.nameError.length == 0 && this.state.emailError.length == 0 && this.state.passwordError.length == 0 && this.state.confirm_passwordError.length == 0){
            alert("Signup successfully!");
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
        // marginBottom: 20,
        width: 300
    },
    button: {
        color: "#ffffff",
        backgroundColor: "blue",
        textAlign: "center",
        padding: 10,
        borderRadius: 10,
        width: 200,
        justifyContent: "center",
        marginTop: 20
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

export default Signup
