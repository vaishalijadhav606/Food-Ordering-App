import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Home from './components/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RestaurantDetails from './components/RestaurantDetails';
import Cart from './components/Cart';

const TabIcon = ({ focused, iconName}) => {
  return (
    <MaterialCommunityIcons name={iconName} style={{color: focused ? 'orange' : 'black'}}  size={25}/>
  )
}

const App = () => {
  return (
    <Router>
        <Scene key = "root">
          <Scene key = "login" component = {Login} title = "Login" hideNavBar={true}/>
          <Scene key = "signup" component = {Signup} title = "Signup" hideNavBar={false}/>
          <Scene key = "restaurantDetails" component = {RestaurantDetails} title = "Restaurant" hideNavBar={false}/>
          <Scene key ='tabBar' tabs={true} tabBarPosition="bottom" activeTintColor={'orange'} hideNavBar={true}>
            <Scene key ="home" component={Home}  title="Home" icon={TabIcon} initial iconName="home" hideNavBar={true}/>
            <Scene key = "cart" component = {Cart} title = "Cart" icon={TabIcon} iconName="cart"  hideNavBar={true}/>
            <Scene key = "profile" component = {Profile} title = "Profile" icon={TabIcon} iconName="account"  hideNavBar={true}/>
          </Scene>
      </Scene>
    </Router>
  )
}

export default App