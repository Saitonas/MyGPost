import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import ButtonCustomComponent from './components/buttonCustom';

class AccountCreationScreen extends React.Component {
  render() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
 
    return (
        <View style={styles.container}>
        <StatusBar style="auto"/>

        <View style={styles.box2}>
            <Text>Rejoignez MyGPost</Text>
            <Text>Nous vous aiderons à créer un compte en quelques instants</Text>
        </View>

        <View style={styles.box1}>
        <ButtonCustomComponent title = "Suivant" onPress={() => this.props.navigation.navigate('nameInfo')}></ButtonCustomComponent>
        </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: "#fff",
    },

    box2: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      //backgroundColor: "#5d5",
    },

    box1: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      //backgroundColor: "#1d5",
    },
  });
export default AccountCreationScreen;
// ...