import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Foundation"
import Icon2 from "react-native-vector-icons/Ionicons"
import COLORS from "../constant/COLORS"
import { useNavigation } from "expo-router";


const styles = StyleSheet.create({
  grey: { color: '#888' },
  navbar: {
    display: 'flex',
    flexDirection: "row",
    height: '12%',
    width: '100%',
    backgroundColor: COLORS.primaryColor.s400,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  wrapper: {
    padding: 30,
  },
  topbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  },
  invoice: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    color: '#999',
    borderColor: '#999'
  }
})
const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.secondaryColor.s100
      }}
    >
      <View style={styles.navbar}>
        <Text style={{ color: 'white', fontSize: 22, fontWeight: 900 }}>Dashboard</Text>
        <TouchableOpacity>
          <Icon name='page-edit' size={30} style={{ color: 'white' }} onPress={() => { navigation.navigate('Invoice') }}></Icon>
        </TouchableOpacity>
      </View>

      <View style={styles.wrapper}>
        <Text style={{ fontWeight: 700, fontSize: 20, marginBottom: 30 }}> Invoice history:</Text>

        <View style={styles.topbar}>
          <Text style={{ fontSize: 16, color: 'black', fontWeight: 500 }}>Name</Text>
          <Text style={{ fontSize: 16, color: 'black', fontWeight: 500 }}>Date</Text>
          <Text style={{ fontSize: 16, color: 'black', fontWeight: 500 }}>Download</Text>
        </View>
        {Array(5).fill(1,1).map((item, index) => {
          return <View style={styles.invoice}>
            <Text style={{ color: '#888' }}>Raghav{index}</Text>
            <Text style={{ color: '#888' }}>19/12/2004</Text>
            <Text style={{ color: '#888' }}><Icon2 size={20} name="code-download-sharp"></Icon2></Text>
          </View>
        })}
      </View>

    </SafeAreaView>
  )
}

export default Dashboard;

