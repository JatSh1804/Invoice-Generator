import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, ScrollView, KeyboardAvoidingView } from "react-native"

import COLORS from "../../constant/COLORS"
import { cloneElement, useEffect, useState } from "react"

import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const styles = StyleSheet.create({

    head: {
        paddingTop: 5,
        fontSize: 20,
        textAlign: "center",
        borderBottomWidth: 2,
        borderBottomColor: "grey"
    },

    logcont: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    input_bar: {
        margin: 9,
        width: 300,
        padding: 15,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 10
    },

    logbtn: {
        padding: 10,
        marginTop: 5,
        marginBottom: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "grey",
        width: 100,
        borderRadius: 15
    }
})

const Signup = () => {
    const [signUpInfo, setsignUpInfo] = useState({ email: '', password: '', username: '' })

    const [isDisabled, setDisabled] = useState(false);
    // const [scroller, setscroller] = useState(false);
    const [Response, setResponse] = useState()

    // useEffect(() => {
    //     if (!signUpInfo.username || !signUpInfo.email || !signUpInfo.password) {
    //         setDisabled(true)
    //     } else { setDisabled(false) }
    // }, [signUpInfo])



    const handlesubmit = (event) => {
        event.preventDefault();
        setDisabled(true);
        // setscroller(true);

        createUserWithEmailAndPassword(auth, signUpInfo.email, signUpInfo.password, signUpInfo.username)
            .then((userCredential) => {
                // setscroller(false)

                // console.log("Credential:", userCredential)
                const user = userCredential.user;
                updateProfile(user, { displayName: signUpInfo.username })
                // console.log(userCredential)

                setResponse(<Text style={{ textAlign:"center",color: 'green' }}>Congratulations! Your Account is Created.</Text>)
                setTimeout(() => {
                    // navigate('/login', { state: location.state })
                }, 1000);
            })
            .catch((error) => {
                console.log("Error:", error)
                const errorCode = error.code;
                const errorMessage = error.message;
                setResponse(<Text style={{textAlign:"center", color: 'red' }}>{errorMessage.slice(5, -1)}</Text>)

                setDisabled(false)
            })
    }
    return (

        <SafeAreaView
            style={{
                flex: 1,
                top: -100
            }}
        >
            <View style={styles.logcont}>


                <KeyboardAvoidingView behavior="padding">
                    <TextInput
                        style={styles.input_bar}
                        placeholder="Email"
                        placeholderTextColor="grey"
                        onChangeText={(email) => { setsignUpInfo((prev) => ({ ...prev, email: email })) }}
                    // value={username}
                    />
                    <TextInput
                        style={styles.input_bar}
                        placeholder="Username"
                        placeholderTextColor="grey"
                        onChangeText={(Username) => { setsignUpInfo((prev) => ({ ...prev, Username: Username })) }}
                    // value={username}
                    />
                    <TextInput
                        style={styles.input_bar}
                        placeholder="Password"
                        placeholderTextColor="grey"
                        onChangeText={(password) => { setsignUpInfo((prev) => ({ ...prev, password: password })) }}
                    // value={username}
                    />

                    {Response}

                </KeyboardAvoidingView>
                <TouchableOpacity style={styles.logbtn} onPress={handlesubmit} disabled={isDisabled} >
                    <Text>SignUp</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>

    )
}

export default Signup;