import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, ScrollView } from "react-native"
import COLORS from '../constant/COLORS'

import Icon2 from 'react-native-vector-icons/AntDesign';

import { useRoute } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import axios from "axios";

const styles = StyleSheet.create({
    navbar: {
        position: 'sticky',
        top: 0,
        display: 'flex',
        flexDirection: "row",
        height: '12%',
        width: '100%',
        backgroundColor: COLORS.primaryColor.s400,
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input_bar: {
        borderRadius: 10,
        borderColor: "grey",
        borderWidth: 1,
        padding: 5,
        minWidth: 110,
        marginTop: 5,
        width: '100%'
    },


    inputCont: {
        padding: 10,
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems:  ,
    },

    txthead: {
        marginLeft: 5,
    },

    flexInput: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 45,
        marginTop: 30
    },



    itemNav: {
        minWidth: 40,
        // fontWeight: 600,
        fontSize: 20
    },
    ItemCont: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        padding: 10
    },
    itemInput: {
        padding: 5,
        borderWidth: 0.9,
        borderRadius: 10,
        borderColor: '#888'
    },

    line: {
        borderBottomColor: "grey",
        borderBottomWidth: 1
    },

    addfeature: {
        display: "flex",
        flexDirection: "row",
        padding: 10
    },

    totalCont: {
        padding: 10,
        borderRadius: 9,
        backgroundColor: 'rgb(165 209 255)'
    },

    totalView: {
        margin: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    btn: {
        justifyContent: "center",
        textAlign: "center",
        padding: 15,
        borderRadius: 10,
        backgroundColor: COLORS.primaryColor.s300,
    },
    btn2: {
        justifyContent: "center",
        textAlign: "center",
        padding: 15,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 10,
        backgroundColor: 'lightgreen',
    },
    btn_text: {
        textAlign: "center",
        fontSize: 17,
        color: COLORS.secondaryColor.s800
    }
})

const Invoice = () => {
    const navigation = useNavigation();
    const route = useRoute()
    const [itemInput, setItemInput] = useState({ Model: '', Price: 0, MRP: 0 })


    //------------Data to be exported--------------------
    const [itemPurchased, setItem] = useState([])
    const [totalAmount, setTotalAmount] = useState(0);

    //invoice Data contain info about the invoice created.
    const [invoiceData, setinvoiceData] = useState({ customerName: '', address: '', PhoneNo: '', Pin: '', itemPurchased: itemPurchased, totalAmount: totalAmount })


    const handleEmail = async () => {
        console.log("hello")
        try {
            const data = await axios.get(`http://20.198.3.45:3500/api/v1/generatePdf/1` + route.params.user.email,
                {
                    params: { email: route.params.user.email, data: invoiceData }
                })

            alert("pdf send Successfully")

        } catch (err) {
            console.log(err)
            alert(err.message)
        }
    }


    useEffect(() => {
        console.log(route.params)
    }, [])

    // useEffect(() => {
    // }, [itemPurchased][totalAmount])


    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: COLORS.secondaryColor.s100,
            }}
        >
            <View style={styles.navbar}>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 900 }}>Invoice</Text>
                <TouchableOpacity>
                    <Icon2 name='profile' size={30} style={{ color: 'white' }} onPress={() => { navigation.navigate('Dashboard') }} />
                </TouchableOpacity>
            </View>
            <View style={styles.wrapper}>
                <View style={styles.inputCont}>
                    <View style={{}}>
                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.txthead}>
                                Customer Name <Text style={{ color: "red" }}>*</Text>
                            </Text>
                            <TextInput
                                style={styles.input_bar}
                                placeholder="Customer Name"
                                placeholderTextColor="gray"
                                onChangeText={(val) => { setinvoiceData((prev) => ({ ...prev, customerName: val })) }}
                            // value={username}
                            />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.txthead}>
                                Phone Number <Text style={{ color: "red" }}>*</Text>
                            </Text>
                            <TextInput
                                style={styles.input_bar}
                                placeholder="Phone Number"
                                placeholderTextColor="gray"
                                onChangeText={(val) => { setinvoiceData((prev) => ({ ...prev, PhoneNo: val })) }}
                            // value={username}
                            />
                        </View>
                    </View>

                    <View style={styles.flexInput}>
                        <View>
                            <Text style={styles.txthead}>
                                Address <Text style={{ color: "red" }}>*</Text>
                            </Text>
                            <TextInput
                                style={styles.input_bar}
                                placeholder="Address"
                                placeholderTextColor="gray"
                                onChangeText={(val) => { setinvoiceData((prev) => ({ ...prev, address: val })) }}
                            // value={username}
                            />
                        </View>
                        <View>
                            <Text style={styles.txthead}>
                                Pin Code <Text style={{ color: "red" }}>*</Text>
                            </Text>
                            <TextInput
                                style={styles.input_bar}
                                placeholder="Pin Code"
                                placeholderTextColor="gray"
                                onChangeText={(val) => { setinvoiceData((prev) => ({ ...prev, Pin: val })) }}
                            // value={username}
                            />
                        </View>

                    </View>

                </View>

                <View style={{ width: '50%', minWidth: 280, borderWidth: 2, borderColor: 'grey', borderRadius: 10, marginTop: 70, marginBottom: 30 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomColor: 'grey', borderBottomWidth: 2 }}>
                        <Text style={styles.itemNav}>Items</Text>
                        <Text style={styles.itemNav} >MRP (₹)</Text>
                        <Text style={styles.itemNav}>Price (₹)</Text>
                    </View>
                    <View style={{}}>
                        {itemPurchased.map((item, index) =>
                            <>
                                <View key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomColor: '#ccc', borderBottomWidth: 2 }}>
                                    <Text style={{ color: '#888', maxWidth: 90 }} >{item.Model} </Text>
                                    <Text style={{ color: '#888', maxWidth: 90 }} >{item.MRP}</Text>
                                    <Text style={{ color: '#888', maxWidth: 90 }} >{item.Price}</Text>
                                </View></>
                        )}
                        <View style={styles.ItemCont} >
                            <View style={{}} >
                                <TextInput style={styles.itemInput} placeholder='Service' onChangeText={(val) => { setItemInput((prev) => ({ ...prev, Model: val })) }}  ></TextInput>
                            </View>
                            <View >
                                <TextInput style={styles.itemInput} keyboardType='numeric' placeholder='MRP' onChangeText={(val) => { setItemInput((prev) => ({ ...prev, MRP: val })) }}></TextInput>
                            </View>
                            <View styles={styles.ItemPrice}>
                                <TextInput style={styles.itemInput} keyboardType='numeric' placeholder='Price' onChangeText={(val) => { setItemInput((prev) => ({ ...prev, Price: val })) }}></TextInput>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.addfeature} onPress={() => { (!itemInput.Model || !itemInput.Price || !itemInput.MRP ? alert('Enter Items Information') : setItem((prev) => [...prev, itemInput]), console.log(itemPurchased), setTotalAmount((prev) => parseInt(itemInput.Price) + parseInt(prev))) }}>
                            <Icon2 name="pluscircle" size={20} style={{ color: "blue", margin: 1 }} />
                            <Text style={{ color: "blue", fontSize: 16 }}> Add Another Item</Text>
                        </TouchableOpacity>
                        {/* <View style={styles.line}></View> */}

                        <View style={styles.totalCont}>
                            <View style={styles.totalView}>
                                <Text>SubTotal</Text>
                                <Text>₹ {totalAmount}</Text>
                            </View>

                        </View>

                    </View >

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginBottom: 40 }}>
                    <TouchableOpacity style={styles.btn} onPress={() => {
                        setinvoiceData((prev) => ({ ...prev, itemPurchased: itemPurchased, totalAmount: totalAmount }))
                            , console.log(invoiceData)
                    }}>
                        <Text style={styles.btn_text}>
                            Save Invoice
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleEmail} style={styles.btn2}>
                        <Text style={styles.btn_text}>
                            Email Invoice
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    )
}

export default Invoice