import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";
// import { Animated, Easing } from 'react-native';
// import { useRouter} from "expo-router"
import { useNavigation, useNavigationState } from '@react-navigation/native';

// import {COLORS , icons } from "../constants";
// import Icon from 'react-native-vector-icons/MaterialIcons';


import { useState, useEffect, useRef } from "react";

import { Provider } from "react-redux";
// import store from "../store/store";


// trying navigation creation...
import { NavigationContainer } from '@react-navigation/native';;
import { createStackNavigator } from '@react-navigation/stack';


import Authentication from "../components/page/Authentication";
import Dashboard from "../components/Dashboard";
import Invoice from "../components/Invoice";

// import * as Device from 'expo-device';

import COLORS from "../constant/COLORS"

import { auth } from "../firebase";

const App = () => {
  const Stack = createStackNavigator();
  const [isAuthenticated, setisAuthenticated] = useState({ authenticated: false, AuthenticatedUserInfo: {} })
  useEffect(() => {
    const authstate = auth.onAuthStateChanged((user) => {
      user ? setisAuthenticated({ authenticated: true, AuthenticatedUserInfo: user }) : setisAuthenticated({ authenticated: false, AuthenticatedUserInfo: user })
      console.log(isAuthenticated.authenticated)
      console.log(isAuthenticated.AuthenticatedUserInfo)
      console.log(isAuthenticated.AuthenticatedUserInfo)
    })
  }, [])

  const headerOptions = {
    headerStyle: {
      backgroundColor: COLORS.primary,
    },
    // headerLeft: renderLeftHeader,
    // headerRight: () => (
    //   <View style={styles.box}>
    //       <TouchableOpacity  style={styles.logobox} onPress={()=> navigation.navigate('SearchBar')}>
    //           <Icon style={styles.searchbox} name="search" size={30}/>
    //       </TouchableOpacity> 
    //       <TouchableOpacity style={styles.logobox} onPress={()=> setRightDrawer(!rightDrawer)}>
    //           <Icon name="account-circle" size={30} style={{
    //               color : "white",
    //           }}/>
    //       </TouchableOpacity> 
    //   </View>
    // ),
    headerTitle: () => (
      <View style={{ flex: 0, flexDirection: "row", alignItems: "center", padding: 1 }}>
        {/* <Image source={icons.logo} style={{ height: 50, width: 50 }} /> */}
        <Text style={{ color: "white", marginLeft: 10, fontSize: 20 }}>Invoice</Text>
      </View>
    ),
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >

      {<Stack.Navigator initialRouteName={isAuthenticated.authenticated ? "Invoice" : "Authentication"} initialParams={isAuthenticated} screenOptions={{ headerShown: true }}>

        <Stack.Screen name="Authentication" component={Authentication} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: true }} />
        <Stack.Screen name="Invoice" component={Invoice} options={{ headerShown: false }} />

      </Stack.Navigator>}


    </SafeAreaView >
  )
}

export default App;
