import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, KeyboardAvoidingView } from "react-native"

// import COLORS from "../../constant/COLORS"
import { useEffect, useState } from "react"
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";


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
        margin: 15,
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

const Login = ({ }) => {
    const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
    const [isDisabled, setDisabled] = useState(false);
    const [response, setResponse] = useState();

    const navigation = useNavigation();

    // useEffect(()=>{console.log(props)})

    const handlesubmit = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password)
            .then((usercredential) => {
                setResponse(<Text style={{ textAlign: 'center', color: 'green' }}>Successfully Logged In.</Text>)
                const user = usercredential.user
                // console.log(user)

                setTimeout(() => {
                    navigation.navigate("Invoice", usercredential)
                }, 1000)
                // setscroller(false)

                setDisabled(false)
            })
            .catch((error) => {
                console.log(error.code)
                let errorMessage = error.message
                setResponse(<Text style={{ textAlign: "center", color: 'red' }}>{errorMessage.slice(10, -1)}</Text>)
                let errorCode = error.code
                // setscroller(false)

                setDisabled(false)
            })



        // console.log(location.state.order)


    };

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
                        onChangeText={(value) => { setLoginInfo((prev) => ({ ...prev, email: value })) }}
                    // value={username}
                    />
                    <TextInput
                        style={styles.input_bar}
                        placeholder="Password"
                        placeholderTextColor="grey"
                        onChangeText={(value) => { setLoginInfo((prev) => ({ ...prev, password: value })) }}
                    // value= {username}
                    />


                    {response}
                </KeyboardAvoidingView>

                <TouchableOpacity style={styles.logbtn} onPress={handlesubmit} disabled={isDisabled}>
                    <Text>Login</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>

    )
}

export default Login