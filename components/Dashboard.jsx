import { View , Text , TouchableOpacity , StyleSheet,  SafeAreaView } from "react-native";

import COLORS from "../constant/COLORS"


const Dashboard = () => {
  return (
    <SafeAreaView
        style={{
            flex : 1,
            backgroundColor : COLORS.secondaryColor.s100
        }} 
    >
        <View>
            <Text>Hello me</Text>
        </View>

    </SafeAreaView>
  )
}

export default Dashboard;

