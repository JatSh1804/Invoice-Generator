import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, ScrollView } from "react-native"
import COLORS from '../constant/COLORS'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

import { useRoute } from '@react-navigation/native';


const styles = StyleSheet.create({
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 2
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
        // padding:5,
        width: '100%',
        borderColor: 'grey'
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
        padding: 20,
        backgroundColor: COLORS.primaryColor.s800
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
        borderRadius: 10,
        backgroundColor: COLORS.primaryColor.s300,
        height: 40,
    },
    btn_text: {
        textAlign: "center",
        fontSize: 17,
        color: COLORS.secondaryColor.s800
    }
})

const Invoice = () => {
    const route = useRoute()
    const [itemPurchased, setItem] = useState([{ Model: '', Quantity: '', Price: '' }])

    useEffect(() => {
        console.log(route.params)
    }, [])
    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: COLORS.secondaryColor.s100,
            }}
        >

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
                            // onChangeText={changeUsername}
                            // value={username}
                            />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.txthead}>
                                Invoice Number <Text style={{ color: "red" }}>*</Text>
                            </Text>
                            <TextInput
                                style={styles.input_bar}
                                placeholder="Invoice Number"
                                placeholderTextColor="gray"
                            // onChangeText={changeUsername}
                            // value={username}
                            />
                        </View>
                    </View>

                    <View style={styles.flexInput}>
                        <View>
                            <Text style={styles.txthead}>
                                Invoice Date <Text style={{ color: "red" }}>*</Text>
                            </Text>
                            <TextInput
                                style={styles.input_bar}
                                placeholder="Invoice Date"
                                placeholderTextColor="gray"
                            // onChangeText={changeUsername}
                            // value={username}
                            />
                        </View>
                        <View>
                            <Text style={styles.txthead}>
                                Due Date <Text style={{ color: "red" }}>*</Text>
                            </Text>
                            <TextInput
                                style={styles.input_bar}
                                placeholder="Due Date"
                                placeholderTextColor="gray"
                            // onChangeText={changeUsername}
                            // value={username}
                            />
                        </View>

                    </View>

                </View>

                <View style={{ width: '50%', minWidth: 280, borderWidth: 1, borderColor: 'grey', borderRadius: 10, marginTop: 70 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomColor: 'grey', borderBottomWidth: 2 }}>
                        <Text style={{}}>
                            Items
                        </Text><Text>Quantity</Text>
                        <Text>Price (₹)</Text>
                    </View>
                    <View style={{}}>
                        {itemPurchased.map((item, index) =>
                            <><View style={styles.ItemCont} key={index}>
                                <View style={{}} key={index}>
                                    <TextInput style={styles.itemInput} placeholder='Model' onChangeText={(val) => { setItem(itemPurchased.splice(index, 1, { Model: val, Quantity: item.Quantity, Price: item.Price })), console.log(itemPurchased) }}  ></TextInput>
                                </View>
                                <View >
                                    <TextInput style={styles.itemInput} placeholder='Quantity'></TextInput>
                                </View>
                                <View styles={styles.ItemPrice}>
                                    <TextInput style={styles.itemInput} placeholder='Price'></TextInput>
                                </View>
                            </View></>
                        )
                        }
                        <TouchableOpacity style={styles.addfeature}>
                            <Icon2 name="pluscircle" size={20} style={{ color: "blue", margin: 1 }} />
                            <Text style={{ color: "blue", fontSize: 16 }} onPress={() => ((setItem(itemPurchased.concat({ Model: '', Quantity: '', Price: '' }))))}> Add Another Item</Text>
                        </TouchableOpacity>
                        {/* <View style={styles.line}></View> */}

                        <View style={styles.totalCont}>
                            <View style={styles.totalView}>
                                <Text>SubTotal</Text>
                                <Text>₹ 5000.00</Text>
                            </View>

                        </View>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btn_text}>
                                Generate Invoice
                            </Text>
                        </TouchableOpacity>

                    </View>


                </View>
            </View>

        </ScrollView>
    )
}

export default Invoice