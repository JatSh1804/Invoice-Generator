import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native"
import COLORS from "../../constant/COLORS"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

import { useState } from "react";

import Login from "./Login"
import Signup from "./Signup";

const styles = StyleSheet.create({

    cont: {
        // flex:0,
        bottom: -5,
        alignItems: "center"
    },
    h1: {
        paddingTop: 5,
        fontSize: 40,
        textAlign: "center",
        // fontWeight: '200'
    },

    head: {
        display: "flex",
        fontSize: 10,
        justifyContent: "center",
    },

    btncont: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        margin: 5,
    },

    btnview: {
        display: "flex",
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        borderColor: "grey",
        borderWidth: 2,
        padding: 10,
        borderRadius: 10
    },

    secondarycont: {
        flex: 1,
        top: 150,
        paddingBottom: 30,
        paddingTop: 30,
        paddingRight: 20,
        paddingLeft: 20
    }

})

const Authentication = () => {
    console.log()
    const [displayCont, setDisplayCont] = useState(true)

    const handleCont = (x) => {
        setDisplayCont(x);
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.secondary,
        }}>

            <Icon name="account-circle" size={100} style={{ color: "grey", margin: 1, textAlign: "center" }} />
            <Text style={styles.h1}>{displayCont ? "Log In" : "Sign Up"}</Text>
            <View style={styles.secondarycont}>

                {
                    displayCont ? (
                        <Login />
                    ) : (
                        <Signup />
                    )
                }
            </View>
            <View style={styles.cont}>
                <Text style={styles.head}>
                    {displayCont ? "Still Without account?" : "Already have an account?"}
                </Text>
                <View style={styles.btncont}>
                    {displayCont ?
                        <TouchableOpacity style={styles.btnview} onPress={() => { handleCont(false) }}>
                            <Icon2 name="adduser" size={20} style={{ color: "grey", margin: 1 }} />
                            <Text>SignUp</Text>
                        </TouchableOpacity>
                        : <TouchableOpacity style={styles.btnview} onPress={() => { handleCont(true) }}>
                            <Icon name="login" size={20} style={{ color: "grey", margin: 1 }} />
                            <Text>Login</Text>
                        </TouchableOpacity>
                    }
                </View>

            </View>

        </SafeAreaView>

    )
}

export default Authentication
